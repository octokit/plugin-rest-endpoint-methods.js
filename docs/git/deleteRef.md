---
name: Delete a reference
example: octokit.git.deleteRef({ owner, repo, ref })
route: DELETE /repos/{owner}/{repo}/git/refs/{ref}
scope: git
type: API method
---

# Delete a reference

```js
octokit.git.deleteRef({
  owner,
  repo,
  ref,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/git/refs/#delete-a-reference).
