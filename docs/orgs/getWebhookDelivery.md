---
name: Get a webhook delivery for an organization webhook
example: octokit.rest.orgs.getWebhookDelivery({ org, hook_id, delivery_id })
route: GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}
scope: orgs
type: API method
---

# Get a webhook delivery for an organization webhook

Returns a delivery for a webhook configured in an organization.

```js
octokit.rest.orgs.getWebhookDelivery({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
<tr><td>delivery_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook).
