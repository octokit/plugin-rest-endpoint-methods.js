---
name: Start an import
example: octokit.rest.migrations.startImport({ owner, repo, vcs_url })
route: PUT /repos/{owner}/{repo}/import
scope: migrations
type: API method
---

# Start an import

**This method is deprecated.**

Start a source import to a GitHub repository using GitHub Importer.
Importing into a GitHub repository with GitHub Actions enabled is not supported and will
return a status `422 Unprocessable Entity` response.

**Warning:** Due to very low levels of usage and available alternatives, this endpoint is deprecated and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```js
octokit.rest.migrations.startImport({
  owner,
  repo,
  vcs_url,
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
<tr><td>vcs_url</td><td>yes</td><td>

The URL of the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.

</td></tr>
<tr><td>vcs_username</td><td>no</td><td>

If authentication is required, the username to provide to `vcs_url`.

</td></tr>
<tr><td>vcs_password</td><td>no</td><td>

If authentication is required, the password to provide to `vcs_url`.

</td></tr>
<tr><td>tfvc_project</td><td>no</td><td>

For a tfvc import, the name of the project that is being imported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#start-an-import).
