---
name: Delete an app authorization
example: octokit.apps.deleteAuthorization({ client_id })
route: DELETE /applications/{client_id}/grant
scope: apps
type: API method
---

# Delete an app authorization

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

```js
octokit.apps.deleteAuthorization({
  client_id,
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
    <tr><td>client_id</td><td>yes</td><td>

The client ID of your GitHub app.

</td></tr>
<tr><td>access_token</td><td>no</td><td>

The OAuth access token used to authenticate to the GitHub API.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#delete-an-app-authorization).
