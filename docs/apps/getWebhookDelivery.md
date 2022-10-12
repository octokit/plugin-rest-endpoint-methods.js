---
name: Get a delivery for an app webhook
example: octokit.rest.apps.getWebhookDelivery({ delivery_id })
route: GET /app/hook/deliveries/{delivery_id}
scope: apps
type: API method
---

# Get a delivery for an app webhook

Returns a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.getWebhookDelivery({
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
    <tr><td>delivery_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-delivery-for-an-app-webhook).
