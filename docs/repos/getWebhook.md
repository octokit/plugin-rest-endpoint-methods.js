---
name: Get a repository webhook
example: octokit.repos.getWebhook({ owner, repo, hook_id })
route: GET /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Get a repository webhook

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-a-repository-webhook).
