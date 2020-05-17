---
name: Update existing import
example: octokit.migrations.updateImport({ owner, repo })
route: PATCH /repos/{owner}/{repo}/import
scope: migrations
type: API method
---

# Update existing import

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.

Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array. You can select the project to import by providing one of the objects in the `project_choices` array in the update request.

The following example demonstrates the workflow for updating an import with "project1" as the project choice. Given a `project_choices` array like such:

To restart an import, no parameters are provided in the update request.

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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/source_imports/#update-existing-import).
