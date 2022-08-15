---
name: Get a delivery for a repository webhook
example: octokit.rest.repos.getWebhookDelivery({ owner, repo, hook_id, delivery_id })
route: GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}
scope: repos
type: API method
---

# Get a delivery for a repository webhook

Returns a delivery for a webhook configured in a repository.

```js
octokit.rest.repos.getWebhookDelivery({
  owner,
  repo,
  hook_id,
  delivery_id,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
<tr><td>delivery_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook).
