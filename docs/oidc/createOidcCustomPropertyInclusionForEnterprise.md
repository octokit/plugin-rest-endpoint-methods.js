---

name: Create an OIDC custom property inclusion for an enterprise
example: octokit.rest.oidc.createOidcCustomPropertyInclusionForEnterprise({ enterprise, custom_property_name })
route: POST /enterprises/{enterprise}/actions/oidc/customization/properties/repo
scope: oidc
type: API method
---

# Create an OIDC custom property inclusion for an enterprise

Adds a repository custom property to be included in the OIDC token for repository actions in an enterprise.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.oidc.createOidcCustomPropertyInclusionForEnterprise({
  enterprise,
  custom_property_name,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>custom_property_name</td><td>yes</td><td>

The name of the custom property to include in the OIDC token

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#create-an-oidc-custom-property-inclusion-for-an-enterprise).
