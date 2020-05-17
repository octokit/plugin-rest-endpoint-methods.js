---
name: Set Git LFS preference
example: octokit.migrations.setLfsPreference({ owner, repo, use_lfs })
route: PATCH /repos/{owner}/{repo}/import/lfs
scope: migrations
type: API method
---

# Set Git LFS preference

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).

```js
octokit.migrations.setLfsPreference({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>use_lfs</td><td>yes</td><td>

Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/source_imports/#set-git-lfs-preference).
