# Test a push hook

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`

```js
octokit.repos.testPushHook({
  owner,
  repo,
  hook_id
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

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
