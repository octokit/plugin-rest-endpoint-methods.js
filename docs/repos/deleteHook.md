---
name: Delete a hook
example: octokit.repos.deleteHook({ owner, repo, hook_id })
route: DELETE /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Delete a hook

```js
octokit.repos.deleteHook({
  owner,
  repo,
  hook_id,
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
<tr><td>hook_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/hooks/#delete-a-hook).
