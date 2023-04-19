---
name: Cancel an import
example: octokit.rest.migrations.cancelImport({ owner, repo })
route: DELETE /repos/{owner}/{repo}/import
scope: migrations
type: API method
---

# Cancel an import

Stop an import for a repository.

```js
octokit.rest.migrations.cancelImport({
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

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/migrations/source-imports#cancel-an-import).
