---
name: Get Copilot seat information and settings for an organization
example: octokit.rest.copilot.getCopilotOrganizationDetails({ org })
route: GET /orgs/{org}/copilot/billing
scope: copilot
type: API method
---

# Get Copilot seat information and settings for an organization

**Note**: This endpoint is in beta and is subject to change.

Gets information about an organization's Copilot subscription, including seat breakdown
and code matching policies. To configure these settings, go to your organization's settings on GitHub.com.
For more information, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-copilot-business-in-your-organization)".

Only organization owners can configure and view details about the organization's Copilot Business subscription.

OAuth app tokens and personal access tokens (classic) need the `manage_billing:copilot` scope to use this endpoint.

```js
octokit.rest.copilot.getCopilotOrganizationDetails({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#get-copilot-seat-information-and-settings-for-an-organization).
