---
name: Get a webhook configuration for an organization
example: octokit.rest.orgs.getWebhookConfigForOrg({ org, hook_id })
route: GET /orgs/{org}/hooks/{hook_id}/config
scope: orgs
type: API method
---

# Get a webhook configuration for an organization

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/orgs/webhooks#get-an-organization-webhook)."

OAuth app tokens and personal access tokens (classic) need the `admin:org_hook` scope to use this endpoint.

```js
octokit.rest.orgs.getWebhookConfigForOrg({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).
