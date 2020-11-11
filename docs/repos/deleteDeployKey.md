---
name: Delete a deploy key
example: octokit.repos.deleteDeployKey({ owner, repo, key_id })
route: DELETE /repos/{owner}/{repo}/keys/{key_id}
scope: repos
type: API method
---

# Delete a deploy key

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

```js
octokit.repos.deleteDeployKey({
  owner,
  repo,
  key_id
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
<tr><td>key_id</td><td>yes</td><td>

key_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-a-deploy-key).
