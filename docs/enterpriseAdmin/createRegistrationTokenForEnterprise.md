---
name: Create a registration token for an enterprise
example: octokit.enterpriseAdmin.createRegistrationTokenForEnterprise({ enterprise })
route: POST /enterprises/{enterprise}/actions/runners/registration-token
scope: enterpriseAdmin
type: API method
---

# Create a registration token for an enterprise

**Warning:** The self-hosted runners API for enterprise accounts is currently in public beta and subject to change.

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/enterpises/octo-enterprise --token TOKEN
```

```js
octokit.enterpriseAdmin.createRegistrationTokenForEnterprise({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/enterprise-admin/actions/#create-a-registration-token-for-an-enterprise).
