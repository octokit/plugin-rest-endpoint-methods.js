---
name: Remove assignees from an issue
example: octokit.rest.issues.removeAssignees({ owner, repo, issue_number, assignees })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees
scope: issues
type: API method
---

# Remove assignees from an issue

Removes one or more assignees from an issue.

```js
octokit.rest.issues.removeAssignees({
  owner,
  repo,
  issue_number,
  assignees,
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
<tr><td>assignees</td><td>yes</td><td>

Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue).
