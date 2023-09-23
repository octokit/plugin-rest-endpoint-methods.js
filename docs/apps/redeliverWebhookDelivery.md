---
name: Redeliver a delivery for an app webhook
example: octokit.rest.apps.redeliverWebhookDelivery({ delivery_id })
route: POST /app/hook/deliveries/{delivery_id}/attempts
scope: apps
type: API method
---

# Redeliver a delivery for an app webhook

Redeliver a delivery for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.redeliverWebhookDelivery({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/webhooks#redeliver-a-delivery-for-an-app-webhook).
