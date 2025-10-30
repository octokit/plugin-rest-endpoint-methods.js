---
name: Create a campaign for an organization
example: octokit.rest.campaigns.createCampaign({ org })
route: POST /orgs/{org}/campaigns
scope: campaigns
type: API method
---

# Create a campaign for an organization

Create a campaign for an organization.

The authenticated user must be an owner or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

Fine-grained tokens must have the "Code scanning alerts" repository permissions (read) on all repositories included
in the campaign.

```js
octokit.rest.campaigns.createCampaign({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/campaigns/campaigns#create-a-campaign-for-an-organization).
