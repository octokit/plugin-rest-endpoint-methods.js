---
name: Update Git LFS preference
example: octokit.rest.migrations.setLfsPreference({ owner, repo, use_lfs })
route: PATCH /repos/{owner}/{repo}/import/lfs
scope: migrations
type: API method
---

# Update Git LFS preference

**This method is deprecated.**

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability
is powered by [Git LFS](https://git-lfs.com).

You can learn more about our LFS feature and working with large files [on our help
site](https://docs.github.com/repositories/working-with-files/managing-large-files).

**Warning:** Due to very low levels of usage and available alternatives, this endpoint is deprecated and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```js
octokit.rest.migrations.setLfsPreference({
  owner,
  repo,
  use_lfs,
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
<tr><td>use_lfs</td><td>yes</td><td>

Whether to store large files during the import. `opt_in` means large files will be stored using Git LFS. `opt_out` means large files will be removed during the import.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference).
