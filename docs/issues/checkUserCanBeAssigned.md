---
name: Check if a user can be assigned
example: octokit.rest.issues.checkUserCanBeAssigned({ owner, repo, assignee })
route: GET /repos/{owner}/{repo}/assignees/{assignee}
scope: issues
type: API method
---

# Check if a user can be assigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

```js
octokit.rest.issues.checkUserCanBeAssigned({
  owner,
  repo,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>assignee</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned).
