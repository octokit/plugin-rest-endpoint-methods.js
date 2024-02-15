---
name: Set the customization template for an OIDC subject claim for an organization
example: octokit.rest.oidc.updateOidcCustomSubTemplateForOrg({ org, include_claim_keys })
route: PUT /orgs/{org}/actions/oidc/customization/sub
scope: oidc
type: API method
---

# Set the customization template for an OIDC subject claim for an organization

Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
You must authenticate using an access token with the `write:org` scope to use this endpoint.
GitHub Apps must have the `admin:org` permission to use this endpoint.

```js
octokit.rest.oidc.updateOidcCustomSubTemplateForOrg({
  org,
  include_claim_keys,
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
<tr><td>include_claim_keys</td><td>yes</td><td>

Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization).
