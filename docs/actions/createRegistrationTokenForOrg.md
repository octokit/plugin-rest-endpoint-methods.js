---
name: Create a registration token for an organization
example: octokit.rest.actions.createRegistrationTokenForOrg({ org })
route: POST /orgs/{org}/actions/runners/registration-token
scope: actions
type: API method
---

# Create a registration token for an organization

Returns a token that you can pass to the `config` script. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

```js
octokit.rest.actions.createRegistrationTokenForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#create-a-registration-token-for-an-organization).
