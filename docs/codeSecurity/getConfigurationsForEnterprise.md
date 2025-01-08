---
name: Get code security configurations for an enterprise
example: octokit.rest.codeSecurity.getConfigurationsForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/code-security/configurations
scope: codeSecurity
type: API method
---

# Get code security configurations for an enterprise

Lists all code security configurations available in an enterprise.

The authenticated user must be an administrator of the enterprise in order to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getConfigurationsForEnterprise({
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

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#get-code-security-configurations-for-an-enterprise).
