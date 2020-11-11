---
name: Ping a repository webhook
example: octokit.repos.pingWebhook({ owner, repo, hook_id })
route: POST /repos/{owner}/{repo}/hooks/{hook_id}/pings
scope: repos
type: API method
---

# Ping a repository webhook

This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.

```js
octokit.repos.pingWebhook({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#ping-a-repository-webhook).
