---

name: List issue suggestions
example: octokit.rest.issues.listSuggestions({ owner, repo, issue_number })
route: GET /repos/{owner}/{repo}/issues/{issue_number}/suggestions
scope: issues
type: API method
---

# List issue suggestions

Lists the suggestions on an issue. A suggestion is an agent-proposed change to an issue's type, labels, fields, assignees, or closed state that a maintainer can approve or dismiss.

By default only pending suggestions are returned. Use `state=all` to return suggestions in every state, or `state=<state>` to filter to a single state. Use `action=<action>` to return only suggestions for a specific change.

This endpoint is only available while the issue suggestions feature is enabled for the repository, and only supports issues, not pull requests.

Requires triage access to the repository.

```js
octokit.rest.issues.listSuggestions({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

The number that identifies the issue.

</td></tr>
<tr><td>state</td><td>no</td><td>

Filter suggestions by their state.

</td></tr>
<tr><td>action</td><td>no</td><td>

Filter suggestions by the change they propose.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issues#list-issue-suggestions).
