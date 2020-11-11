---
name: Delete a label
example: octokit.issues.deleteLabel({ owner, repo, name })
route: DELETE /repos/{owner}/{repo}/labels/{name}
scope: issues
type: API method
---

# Delete a label

```js
octokit.issues.deleteLabel({
  owner,
  repo,
  name
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
<tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#delete-a-label).
