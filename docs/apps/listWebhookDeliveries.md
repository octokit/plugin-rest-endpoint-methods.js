---
name: List deliveries for an app webhook
example: octokit.rest.apps.listWebhookDeliveries()
route: GET /app/hook/deliveries
scope: apps
type: API method
---

# List deliveries for an app webhook

Returns a list of webhook deliveries for the webhook configured for a GitHub App.

You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.listWebhookDeliveries();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>cursor</td><td>no</td><td>

Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-deliveries-for-an-app-webhook).
