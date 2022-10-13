---
name: List deliveries for a repository webhook
example: octokit.rest.repos.listWebhookDeliveries({ owner, repo, hook_id })
route: GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries
scope: repos
type: API method
---

# List deliveries for a repository webhook

Returns a list of webhook deliveries for a webhook configured in a repository.

```js
octokit.rest.repos.listWebhookDeliveries({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>cursor</td><td>no</td><td>

Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook).
