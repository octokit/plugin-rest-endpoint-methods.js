---
name: Create a campaign for an organization
example: octokit.rest.campaigns.createCampaign({ org, name, description, ends_at, code_scanning_alerts, code_scanning_alerts[].repository_id, code_scanning_alerts[].alert_numbers })
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
name,
description,
ends_at,
code_scanning_alerts,
code_scanning_alerts[].repository_id,
code_scanning_alerts[].alert_numbers
      })
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
<tr><td>name</td><td>yes</td><td>

The name of the campaign

</td></tr>
<tr><td>description</td><td>yes</td><td>

A description for the campaign

</td></tr>
<tr><td>managers</td><td>no</td><td>

The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.

</td></tr>
<tr><td>team_managers</td><td>no</td><td>

The slugs of the teams to set as the campaign managers.

</td></tr>
<tr><td>ends_at</td><td>yes</td><td>

The end date and time of the campaign. The date must be in the future.

</td></tr>
<tr><td>contact_link</td><td>no</td><td>

The contact link of the campaign. Must be a URI.

</td></tr>
<tr><td>code_scanning_alerts</td><td>yes</td><td>

The code scanning alerts to include in this campaign

</td></tr>
<tr><td>code_scanning_alerts[].repository_id</td><td>yes</td><td>

The repository id

</td></tr>
<tr><td>code_scanning_alerts[].alert_numbers</td><td>yes</td><td>

The alert numbers

</td></tr>
<tr><td>generate_issues</td><td>no</td><td>

If true, will automatically generate issues for the campaign. The default is false.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/campaigns/campaigns#create-a-campaign-for-an-organization).
