---
name: Create a remove token for an organization
example: octokit.actions.createRemoveTokenForOrg({ org })
route: POST /orgs/{org}/actions/runners/remove-token
scope: actions
type: API method
---

# Create a remove token for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour. Anyone with admin access to the organization can use this endpoint.

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this endpoint.

```js
octokit.actions.createRemoveTokenForOrg({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#create-a-remove-token-for-an-organization).
