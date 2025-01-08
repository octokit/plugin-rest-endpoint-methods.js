---
name: Remove teams from the Copilot subscription for an organization
example: octokit.rest.copilot.cancelCopilotSeatAssignmentForTeams({ org, selected_teams })
route: DELETE /orgs/{org}/copilot/billing/selected_teams
scope: copilot
type: API method
---

# Remove teams from the Copilot subscription for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Sets seats for all members of each team specified to "pending cancellation".
This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle unless they retain access through another team.
For more information about disabling access to Copilot, see "[Revoking access to Copilot for members of your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)."

Only organization owners can cancel Copilot seats for their organization members.

The response contains the total number of seats set to "pending cancellation".

OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.

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
