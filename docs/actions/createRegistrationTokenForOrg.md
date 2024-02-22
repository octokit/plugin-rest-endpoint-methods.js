---
name: Create a registration token for an organization
example: octokit.rest.actions.createRegistrationTokenForOrg({ org })
route: POST /orgs/{org}/actions/runners/registration-token
scope: actions
type: API method
---

# Create a registration token for an organization

Returns a token that you can pass to the `config` script. The token expires after one hour.

For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to configure your self-hosted runner:

```
./config.sh --url https://github.com/octo-org --token TOKEN
```

Authenticated users must have admin access to the organization to use this endpoint.

OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#create-a-registration-token-for-an-organization).
