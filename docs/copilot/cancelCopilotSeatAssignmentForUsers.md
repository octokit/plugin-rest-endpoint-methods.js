---
name: Remove users from the Copilot for Business subscription for an organization
example: octokit.rest.copilot.cancelCopilotSeatAssignmentForUsers({ org, selected_usernames })
route: DELETE /orgs/{org}/copilot/billing/selected_users
scope: copilot
type: API method
---

# Remove users from the Copilot for Business subscription for an organization

**Note**: This endpoint is in beta and is subject to change.

Cancels the Copilot for Business seat assignment for each user specified.
This will cause the specified users to lose access to GitHub Copilot at the end of the current billing cycle, and the organization will not be billed further for those users.

For more information about Copilot for Business pricing, see "[About billing for GitHub Copilot for Business](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-for-business)"

For more information about disabling access to Copilot for Business, see "[Disabling access to GitHub Copilot for specific users in your organization](https://docs.github.com/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization#disabling-access-to-github-copilot-for-specific-users-in-your-organization)".

Only organization owners and members with admin permissions can configure GitHub Copilot in their organization. You must
authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-for-business#remove-users-from-the-copilot-for-business-subscription-for-an-organization).
