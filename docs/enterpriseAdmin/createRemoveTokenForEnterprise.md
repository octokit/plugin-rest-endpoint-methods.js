---
name: Create a remove token for an enterprise
example: octokit.enterpriseAdmin.createRemoveTokenForEnterprise({ enterprise })
route: POST /enterprises/{enterprise}/actions/runners/remove-token
scope: enterpriseAdmin
type: API method
---

# Create a remove token for an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

```js
octokit.enterpriseAdmin.createRemoveTokenForEnterprise({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#create-a-remove-token-for-an-enterprise).
