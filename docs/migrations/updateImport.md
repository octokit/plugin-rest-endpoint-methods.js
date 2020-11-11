---
name: Update an import
example: octokit.migrations.updateImport({ owner, repo })
route: PATCH /repos/{owner}/{repo}/import
scope: migrations
type: API method
---

# Update an import

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
request. If no parameters are provided, the import will be restarted.

```js
octokit.migrations.updateImport({
  owner,
  repo,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>vcs_username</td><td>no</td><td>

The username to provide to the originating repository.

</td></tr>
<tr><td>vcs_password</td><td>no</td><td>

The password to provide to the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

</td></tr>
<tr><td>tfvc_project</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#update-an-import).
