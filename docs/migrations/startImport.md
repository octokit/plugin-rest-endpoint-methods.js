# Start an import

Start a source import to a GitHub repository using GitHub Importer.

```js
octokit.migrations.startImport({
  owner,
  repo,
  vcs_url
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
<tr><td>vcs_url</td><td>yes</td><td>

The URL of the originating repository.

</td></tr>
<tr><td>vcs</td><td>no</td><td>

The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.

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

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
