# Delete a reference

```
DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a
```

```
DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
```

```js
octokit.git.deleteRef(owner, repo, ref);
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

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
