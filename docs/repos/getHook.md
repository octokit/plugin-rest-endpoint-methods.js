---
name: Get single hook
example: octokit.repos.getHook({ owner, repo, hook_id })
route: GET /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Get single hook

```js
octokit.repos.getHook({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

hook_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/hooks/#get-single-hook).
