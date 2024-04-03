---
name: Get the customization template for an OIDC subject claim for an organization
example: octokit.rest.oidc.getOidcCustomSubTemplateForOrg({ org })
route: GET /orgs/{org}/actions/oidc/customization/sub
scope: oidc
type: API method
---

# Get the customization template for an OIDC subject claim for an organization

Gets the customization template for an OpenID Connect (OIDC) subject claim.

OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```js
octokit.rest.oidc.getOidcCustomSubTemplateForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization).
