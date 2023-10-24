---
name: Map a commit author
example: octokit.rest.migrations.mapCommitAuthor({ owner, repo, author_id })
route: PATCH /repos/{owner}/{repo}/import/authors/{author_id}
scope: migrations
type: API method
---

# Map a commit author

**This method is deprecated.**

Update an author's identity for the import. Your application can continue updating authors any time before you push
new commits to the repository.

**Warning:** Due to very low levels of usage and available alternatives, this endpoint is deprecated and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

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

The name of the repository without the `.git` extension. The name is not case sensitive.

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
