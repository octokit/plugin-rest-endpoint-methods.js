---
name: Create a remove token for an organization
example: octokit.rest.actions.createRemoveTokenForOrg({ org })
route: POST /orgs/{org}/actions/runners/remove-token
scope: actions
type: API method
---

# Create a remove token for an organization

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```

```js
octokit.rest.actions.createRemoveTokenForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization).
