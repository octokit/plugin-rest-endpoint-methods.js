# Check assignee

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

```js
octokit.issues.checkAssignee({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>assignee</td><td>yes</td><td>

assignee parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/assignees/#check-assignee).
