---
name: Ping a hook
example: octokit.repos.pingHook({ owner, repo, hook_id })
route: POST /repos/{owner}/{repo}/hooks/{hook_id}/pings
scope: repos
type: API method
---

# Ping a hook

This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.

```js
octokit.repos.pingHook({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/hooks/#ping-a-hook).
