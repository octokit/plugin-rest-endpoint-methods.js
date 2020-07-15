---
name: Create a registration token for an organization
example: octokit.actions.createRegistrationTokenForOrg({ org })
route: POST /orgs/{org}/actions/runners/registration-token
scope: actions
type: API method
---

# Create a registration token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

```js
octokit.actions.createRegistrationTokenForOrg({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#create-a-registration-token-for-an-organization).
