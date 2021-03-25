---
name: Map a commit author
example: octokit.rest.migrations.mapCommitAuthor({ owner, repo, author_id })
route: PATCH /repos/{owner}/{repo}/import/authors/{author_id}
scope: migrations
type: API method
---

# Map a commit author

Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.

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
<tr><td>remote_id</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#map-a-commit-author).
