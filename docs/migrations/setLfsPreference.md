---
name: Update Git LFS preference
example: octokit.rest.migrations.setLfsPreference({ owner, repo, use_lfs })
route: PATCH /repos/{owner}/{repo}/import/lfs
scope: migrations
type: API method
---

# Update Git LFS preference

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability
is powered by [Git LFS](https://git-lfs.com).

You can learn more about our LFS feature and working with large files [on our help
site](https://docs.github.com/repositories/working-with-files/managing-large-files).

**Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.

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
