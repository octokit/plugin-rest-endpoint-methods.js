---
name: Get a repository webhook
example: octokit.repos.getWebhook({ owner, repo, hook_id })
route: GET /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Get a repository webhook

```js
octokit.repos.getWebhook({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/hooks/#get-a-repository-webhook).
