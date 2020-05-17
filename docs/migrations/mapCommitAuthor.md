---
name: Map a commit author
example: octokit.migrations.mapCommitAuthor({ owner, repo, author_id })
route: PATCH /repos/{owner}/{repo}/import/authors/{author_id}
scope: migrations
type: API method
---

# Map a commit author

Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

```js
octokit.migrations.mapCommitAuthor({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author).
