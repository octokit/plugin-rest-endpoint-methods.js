---
name: Delete an issue reaction
example: octokit.rest.reactions.deleteForIssue({ owner, repo, issue_number, reaction_id })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete an issue reaction

**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues/).

```js
octokit.rest.reactions.deleteForIssue({
  owner,
  repo,
  issue_number,
  reaction_id,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

The number that identifies the issue.

</td></tr>
<tr><td>reaction_id</td><td>yes</td><td>

The unique identifier of the reaction.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#delete-an-issue-reaction).
