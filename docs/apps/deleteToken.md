---
name: Delete an app token
example: octokit.apps.deleteToken({ client_id })
route: DELETE /applications/{client_id}/token
scope: apps
type: API method
---

# Delete an app token

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.

```js
octokit.apps.deleteToken({
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

client_id parameter

</td></tr>
<tr><td>access_token</td><td>no</td><td>

The OAuth access token used to authenticate to the GitHub API.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/oauth_applications/#delete-an-app-token).
