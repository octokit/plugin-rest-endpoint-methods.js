---
name: Get a label
example: octokit.issues.getLabel({ owner, repo, name })
route: GET /repos/{owner}/{repo}/labels/{name}
scope: issues
type: API method
---

# Get a label

```js
octokit.issues.getLabel({
  owner,
  repo,
  name,
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/labels/#get-a-label).
