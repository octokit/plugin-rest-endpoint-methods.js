---

name: Delete an OIDC custom property inclusion for an enterprise
example: octokit.rest.oidc.deleteOidcCustomPropertyInclusionForEnterprise({ enterprise, custom_property_name })
route: DELETE /enterprises/{enterprise}/actions/oidc/customization/properties/repo/{custom_property_name}
scope: oidc
type: API method
---

# Delete an OIDC custom property inclusion for an enterprise

Removes a repository custom property from being included in the OIDC token for repository actions in an enterprise.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.oidc.deleteOidcCustomPropertyInclusionForEnterprise({
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

The name of the custom property to remove from OIDC token inclusion

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#delete-an-oidc-custom-property-inclusion-for-an-enterprise).
