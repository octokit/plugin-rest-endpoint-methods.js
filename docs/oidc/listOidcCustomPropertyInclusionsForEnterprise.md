---

name: List OIDC custom property inclusions for an enterprise
example: octokit.rest.oidc.listOidcCustomPropertyInclusionsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/actions/oidc/customization/properties/repo
scope: oidc
type: API method
---

# List OIDC custom property inclusions for an enterprise

Lists the repository custom properties that are included in the OIDC token for repository actions in an enterprise.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.oidc.listOidcCustomPropertyInclusionsForEnterprise({
  enterprise,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#list-oidc-custom-property-inclusions-for-an-enterprise).
