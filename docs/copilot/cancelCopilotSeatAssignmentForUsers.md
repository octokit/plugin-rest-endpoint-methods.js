---
name: Remove users from the Copilot subscription for an organization
example: octokit.rest.copilot.cancelCopilotSeatAssignmentForUsers({ org, selected_usernames })
route: DELETE /orgs/{org}/copilot/billing/selected_users
scope: copilot
type: API method
---

# Remove users from the Copilot subscription for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Sets seats for all users specified to "pending cancellation".
This will cause the specified users to lose access to GitHub Copilot at the end of the current billing cycle unless they retain access through team membership.
For more information about disabling access to Copilot, see "[Revoking access to Copilot for members of your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)."

Only organization owners can cancel Copilot seats for their organization members.

The response contains the total number of seats set to "pending cancellation".

OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.

```js
octokit.rest.copilot.cancelCopilotSeatAssignmentForUsers({
  org,
  selected_usernames,
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
<tr><td>selected_usernames</td><td>yes</td><td>

The usernames of the organization members for which to revoke access to GitHub Copilot.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#remove-users-from-the-copilot-subscription-for-an-organization).
