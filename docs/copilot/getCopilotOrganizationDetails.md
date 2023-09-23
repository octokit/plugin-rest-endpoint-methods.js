---
name: Get Copilot for Business seat information and settings for an organization
example: octokit.rest.copilot.getCopilotOrganizationDetails({ org })
route: GET /orgs/{org}/copilot/billing
scope: copilot
type: API method
---

# Get Copilot for Business seat information and settings for an organization

**Note**: This endpoint is in beta and is subject to change.

Gets information about an organization's Copilot for Business subscription, including seat breakdown
and code matching policies. To configure these settings, go to your organization's settings on GitHub.com.
For more information, see "[Configuring GitHub Copilot settings in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)".

Only organization owners and members with admin permissions can configure and view details about the organization's Copilot for Business subscription. You must
authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-for-business#get-copilot-for-business-seat-information-and-settings-for-an-organization).
