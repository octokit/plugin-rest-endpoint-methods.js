---
name: List deliveries for an organization webhook
example: octokit.rest.orgs.listWebhookDeliveries({ org, hook_id })
route: GET /orgs/{org}/hooks/{hook_id}/deliveries
scope: orgs
type: API method
---

# List deliveries for an organization webhook

Returns a list of webhook deliveries for a webhook configured in an organization.

```js
octokit.rest.orgs.listWebhookDeliveries({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>cursor</td><td>no</td><td>

Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#list-deliveries-for-an-organization-webhook).
