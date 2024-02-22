---
name: Remove teams from the Copilot subscription for an organization
example: octokit.rest.copilot.cancelCopilotSeatAssignmentForTeams({ org, selected_teams })
route: DELETE /orgs/{org}/copilot/billing/selected_teams
scope: copilot
type: API method
---

# Remove teams from the Copilot subscription for an organization

**Note**: This endpoint is in beta and is subject to change.

Cancels the Copilot seat assignment for all members of each team specified.
This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.

For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".

For more information about disabling access to Copilot Business or Enterprise, see "[Revoking access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/managing-copilot/managing-access-for-copilot-in-your-organization#revoking-access-to-github-copilot-for-specific-users-in-your-organization)".

Only organization owners can configure GitHub Copilot in their organization.

OAuth app tokens and personal access tokens (classic) need the `manage_billing:copilot` scope to use this endpoint.

```js
octokit.rest.copilot.cancelCopilotSeatAssignmentForTeams({
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

The names of teams from which to revoke access to GitHub Copilot.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#remove-teams-from-the-copilot-subscription-for-an-organization).
