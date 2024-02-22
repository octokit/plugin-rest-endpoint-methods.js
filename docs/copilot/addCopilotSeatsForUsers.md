---
name: Add users to the Copilot subscription for an organization
example: octokit.rest.copilot.addCopilotSeatsForUsers({ org, selected_usernames })
route: POST /orgs/{org}/copilot/billing/selected_users
scope: copilot
type: API method
---

# Add users to the Copilot subscription for an organization

**Note**: This endpoint is in beta and is subject to change.

Purchases a GitHub Copilot seat for each user specified.
The organization will be billed accordingly. For more information about Copilot pricing, see "[Pricing for GitHub Copilot](https://docs.github.com/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#about-billing-for-github-copilot)".

Only organization owners can configure GitHub Copilot in their organization.

In order for an admin to use this endpoint, the organization must have a Copilot Business or Enterprise subscription and a configured suggestion matching policy.
For more information about setting up a Copilot subscription, see "[Setting up a Copilot subscription for your organization](https://docs.github.com/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)".
For more information about setting a suggestion matching policy, see "[Configuring suggestion matching policies for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-github-copilot-in-your-organization#configuring-suggestion-matching-policies-for-github-copilot-in-your-organization)".

OAuth app tokens and personal access tokens (classic) need the `manage_billing:copilot` scope to use this endpoint.

```js
octokit.rest.copilot.addCopilotSeatsForUsers({
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

The usernames of the organization members to be granted access to GitHub Copilot.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#add-users-to-the-copilot-subscription-for-an-organization).
