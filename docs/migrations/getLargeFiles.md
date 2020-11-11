---
name: Get large files
example: octokit.migrations.getLargeFiles({ owner, repo })
route: GET /repos/{owner}/{repo}/import/large_files
scope: migrations
type: API method
---

# Get large files

List files larger than 100MB found during the import

```js
octokit.migrations.getLargeFiles({
  owner,
  repo
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/migrations#get-large-files).
