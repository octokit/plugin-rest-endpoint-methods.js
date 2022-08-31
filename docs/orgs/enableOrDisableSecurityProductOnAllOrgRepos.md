---
name: Enable or disable a security feature for an organization
example: octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos({ org, security_product, enablement })
route: POST /orgs/{org}/{security_product}/{enablement}
scope: orgs
type: API method
---

# Enable or disable a security feature for an organization

Enables or disables the specified security feature for all repositories in an organization.

To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
A token with the 'write:org' scope is also required.

GitHub Apps must have the `organization_administration:write` permission to use this endpoint.

For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

```js
octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos({
  org,
  security_product,
  enablement,
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
<tr><td>security_product</td><td>yes</td><td>

The security feature to enable or disable.

</td></tr>
<tr><td>enablement</td><td>yes</td><td>

The action to take.

`enable_all` means to enable the specified security feature for all repositories in the organization.
`disable_all` means to disable the specified security feature for all repositories in the organization.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#enable-or-disable-security-product-on-all-org-repos).
