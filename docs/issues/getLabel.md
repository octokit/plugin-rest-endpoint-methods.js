---
name: Get a label
example: octokit.rest.issues.getLabel({ owner, repo, name })
route: GET /repos/{owner}/{repo}/labels/{name}
scope: issues
type: API method
---

# Get a label

Gets a label using the given name.

```js
octokit.rest.issues.getLabel({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/labels#get-a-label).
