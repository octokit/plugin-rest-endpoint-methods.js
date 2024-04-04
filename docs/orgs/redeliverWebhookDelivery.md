---
name: Redeliver a delivery for an organization webhook
example: octokit.rest.orgs.redeliverWebhookDelivery({ org, hook_id, delivery_id })
route: POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts
scope: orgs
type: API method
---

# Redeliver a delivery for an organization webhook

Redeliver a delivery for a webhook configured in an organization.

```js
octokit.rest.orgs.redeliverWebhookDelivery({
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

The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.

</td></tr>
<tr><td>delivery_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/webhooks#redeliver-a-delivery-for-an-organization-webhook).
