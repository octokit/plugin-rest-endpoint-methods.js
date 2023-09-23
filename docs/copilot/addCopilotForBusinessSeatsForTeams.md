---
name: Add teams to the Copilot for Business subscription for an organization
example: octokit.rest.copilot.addCopilotForBusinessSeatsForTeams({ org, selected_teams })
route: POST /orgs/{org}/copilot/billing/selected_teams
scope: copilot
type: API method
---

# Add teams to the Copilot for Business subscription for an organization

**Note**: This endpoint is in beta and is subject to change.

Purchases a GitHub Copilot for Business seat for all users within each specified team.
The organization will be billed accordingly. For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)".

Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.

In order for an admin to use this endpoint, the organization must have a Copilot for Business subscription and a configured suggestion matching policy.
For more information about setting up a Copilot for Business subscription, see "[Setting up a Copilot for Business subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise#setting-up-a-copilot-for-business-subscription-for-your-organization)".
For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".

```js
octokit.rest.copilot.addCopilotForBusinessSeatsForTeams({
  org,
  selected_teams,
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
<tr><td>selected_teams</td><td>yes</td><td>

List of team names within the organization to which to grant access to GitHub Copilot.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-for-business#add-teams-to-the-copilot-for-business-subscription-for-an-organization).
