---
name: Get an organization
example: octokit.rest.orgs.get({ org })
route: GET /orgs/{org}
scope: orgs
type: API method
---

# Get an organization

Gets information about an organization.

When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

To see the full details about an organization, the authenticated user must be an organization owner.

The values returned by this endpoint are set by the "Update an organization" endpoint. If your organization set a default security configuration (beta), the following values retrieved from the "Update an organization" endpoint have been overwritten by that configuration:

- advanced_security_enabled_for_new_repositories
- dependabot_alerts_enabled_for_new_repositories
- dependabot_security_updates_enabled_for_new_repositories
- dependency_graph_enabled_for_new_repositories
- secret_scanning_enabled_for_new_repositories
- secret_scanning_push_protection_enabled_for_new_repositories

For more information on security configurations, see "[Enabling security features at scale](https://docs.github.com/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale)."

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.

To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.

```js
octokit.rest.orgs.get({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#get-an-organization).
