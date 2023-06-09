---
name: Delete a code scanning analysis from a repository
example: octokit.rest.codeScanning.deleteAnalysis({ owner, repo, analysis_id })
route: DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}
scope: codeScanning
type: API method
---

# Delete a code scanning analysis from a repository

Deletes a specified code scanning analysis from a repository. For
private repositories, you must use an access token with the `repo` scope. For public repositories,
you must use an access token with `public_repo` scope.
GitHub Apps must have the `security_events` write permission to use this endpoint.

You can delete one analysis at a time.
To delete a series of analyses, start with the most recent analysis and work backwards.
Conceptually, the process is similar to the undo function in a text editor.

When you list the analyses for a repository,
one or more will be identified as deletable in the response:

```
"deletable": true
```

An analysis is deletable when it's the most recent in a set of analyses.
Typically, a repository will have multiple sets of analyses
for each enabled code scanning tool,
where a set is determined by a unique combination of analysis values:

- `ref`
- `tool`
- `category`

If you attempt to delete an analysis that is not the most recent in a set,
you'll get a 400 response with the message:

```
Analysis specified is not deletable.
```

The response from a successful `DELETE` operation provides you with
two alternative URLs for deleting the next analysis in the set:
`next_analysis_url` and `confirm_delete_url`.
Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
in a set. This is a useful option if you want to preserve at least one analysis
for the specified tool in your repository.
Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`
in the 200 response is `null`.

As an example of the deletion process,
let's imagine that you added a workflow that configured a particular code scanning tool
to analyze the code in a repository. This tool has added 15 analyses:
10 on the default branch, and another 5 on a topic branch.
You therefore have two separate sets of analyses for this tool.
You've now decided that you want to remove all of the analyses for the tool.
To do this you must make 15 separate deletion requests.
To start, you must find an analysis that's identified as deletable.
Each set of analyses always has one that's identified as deletable.
Having found the deletable analysis for one of the two sets,
delete this analysis and then continue deleting the next analysis in the set until they're all deleted.
Then repeat the process for the second set.
The procedure therefore consists of a nested loop:

**Outer loop**:

- List the analyses for the repository, filtered by tool.
- Parse this list to find a deletable analysis. If found:

  **Inner loop**:

  - Delete the identified analysis.
  - Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.

The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.

```js
octokit.rest.codeScanning.deleteAnalysis({
  owner,
  repo,
  analysis_id,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>analysis_id</td><td>yes</td><td>

The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.

</td></tr>
<tr><td>confirm_delete</td><td>no</td><td>

Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository).
