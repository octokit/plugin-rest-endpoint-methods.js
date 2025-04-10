---
name: Update a campaign
example: octokit.rest.campaigns.updateCampaign({ org, campaign_number })
route: PATCH /orgs/{org}/campaigns/{campaign_number}
scope: campaigns
type: API method
---

# Update a campaign

Updates a campaign in an organization.

The authenticated user must be an owner or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```js
octokit.rest.campaigns.updateCampaign({
  org,
  campaign_number,
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
<tr><td>campaign_number</td><td>yes</td><td>

The campaign number.

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the campaign

</td></tr>
<tr><td>description</td><td>no</td><td>

A description for the campaign

</td></tr>
<tr><td>managers</td><td>no</td><td>

The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.

</td></tr>
<tr><td>team_managers</td><td>no</td><td>

The slugs of the teams to set as the campaign managers.

</td></tr>
<tr><td>ends_at</td><td>no</td><td>

The end date and time of the campaign, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.

</td></tr>
<tr><td>contact_link</td><td>no</td><td>

The contact link of the campaign. Must be a URI.

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates whether a campaign is open or closed

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/campaigns/campaigns#update-a-campaign).
