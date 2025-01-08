---
name: Enable or disable a security feature for an organization
example: octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos({ org, security_product, enablement })
route: POST /orgs/{org}/{security_product}/{enablement}
scope: orgs
type: API method
---

# Enable or disable a security feature for an organization

**This method is deprecated.**

> [!WARNING] > **Closing down notice:** The ability to enable or disable a security feature for all eligible repositories in an organization is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-07-22-deprecation-of-api-endpoint-to-enable-or-disable-a-security-feature-for-an-organization/).

Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org`, `write:org`, or `repo` scopes to use this endpoint.

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
<tr><td>query_suite</td><td>no</td><td>

CodeQL query suite to be used. If you specify the `query_suite` parameter, the default setup will be configured with this query suite only on all repositories that didn't have default setup already configured. It will not change the query suite on repositories that already have default setup configured.
If you don't specify any `query_suite` in your request, the preferred query suite of the organization will be applied.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization).
