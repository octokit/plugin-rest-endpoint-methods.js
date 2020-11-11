---
name: Set allowed actions for an organization
example: octokit.actions.setAllowedActionsOrganization({ org })
route: PUT /orgs/{org}/actions/permissions/selected-actions
scope: actions
type: API method
---

# Set allowed actions for an organization

Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."

If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.

```js
octokit.actions.setAllowedActionsOrganization({
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

</td></tr>
<tr><td>github_owned_allowed</td><td>no</td><td>

Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.

</td></tr>
<tr><td>verified_allowed</td><td>no</td><td>

Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.

</td></tr>
<tr><td>patterns_allowed</td><td>no</td><td>

Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization).
