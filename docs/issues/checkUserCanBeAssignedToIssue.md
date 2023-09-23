---
name: Check if a user can be assigned to a issue
example: octokit.rest.issues.checkUserCanBeAssignedToIssue({ owner, repo, issue_number, assignee })
route: GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}
scope: issues
type: API method
---

# Check if a user can be assigned to a issue

Checks if a user has permission to be assigned to a specific issue.

If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.

Otherwise a `404` status code is returned.

```js
octokit.rest.issues.checkUserCanBeAssignedToIssue({
  owner,
  repo,
  issue_number,
  assignee,
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
<tr><td>assignee</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/assignees#check-if-a-user-can-be-assigned-to-a-issue).
