---
name: Update an import
example: octokit.rest.migrations.updateImport({ owner, repo })
route: PATCH /repos/{owner}/{repo}/import
scope: migrations
type: API method
---

# Update an import

**This method is deprecated.**

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
request. If no parameters are provided, the import will be restarted.

Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will
have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.
You can select the project to import by providing one of the objects in the `project_choices` array in the update request.

**Warning:** Due to very low levels of usage and available alternatives, this endpoint is deprecated and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```js
octokit.rest.migrations.updateImport({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>vcs_username</td><td>no</td><td>

The username to provide to the originating repository.

</td></tr>
<tr><td>vcs_password</td><td>no</td><td>

The password to provide to the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

The type of version control system you are migrating from.

</td></tr>
<tr><td>tfvc_project</td><td>no</td><td>

For a tfvc import, the name of the project that is being imported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#update-an-import).
