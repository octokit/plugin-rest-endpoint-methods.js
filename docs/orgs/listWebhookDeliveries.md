---
name: List deliveries for an organization webhook
example: octokit.rest.orgs.listWebhookDeliveries({ org, hook_id })
route: GET /orgs/{org}/hooks/{hook_id}/deliveries
scope: orgs
type: API method
---

# List deliveries for an organization webhook

Returns a list of webhook deliveries for a webhook configured in an organization.

You must be an organization owner to use this endpoint.

OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit
webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>cursor</td><td>no</td><td>

Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/webhooks#list-deliveries-for-an-organization-webhook).
