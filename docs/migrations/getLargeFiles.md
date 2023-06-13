---
name: Get large files
example: octokit.rest.migrations.getLargeFiles({ owner, repo })
route: GET /repos/{owner}/{repo}/import/large_files
scope: migrations
type: API method
---

# Get large files

List files larger than 100MB found during the import

**Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.

```js
octokit.rest.migrations.getLargeFiles({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#get-large-files).
