---
name: Map a commit author
example: octokit.rest.migrations.mapCommitAuthor({ owner, repo, author_id })
route: PATCH /repos/{owner}/{repo}/import/authors/{author_id}
scope: migrations
type: API method
---

# Map a commit author

Update an author's identity for the import. Your application can continue updating authors any time before you push
new commits to the repository.

**Warning:** Support for importing Mercurial, Subversion and Team Foundation Version Control repositories will end
on October 17, 2023. For more details, see [changelog](https://gh.io/github-importer-non-git-eol). In the coming weeks, we will update
these docs to reflect relevant changes to the API and will contact all integrators using the "Source imports" API.

```js
octokit.rest.migrations.mapCommitAuthor({
  owner,
  repo,
  author_id,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>author_id</td><td>yes</td><td>

</td></tr>
<tr><td>email</td><td>no</td><td>

The new Git author email.

</td></tr>
<tr><td>name</td><td>no</td><td>

The new Git author name.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#map-a-commit-author).
