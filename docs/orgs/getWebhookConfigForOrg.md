---
name: Get a webhook configuration for an organization
example: octokit.orgs.getWebhookConfigForOrg({ org, hook_id })
route: GET /orgs/{org}/hooks/{hook_id}/config
scope: orgs
type: API method
---

# Get a webhook configuration for an organization

Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."

Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.

```js
octokit.orgs.getWebhookConfigForOrg({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/orgs#get-a-webhook-configuration-for-an-organization).
