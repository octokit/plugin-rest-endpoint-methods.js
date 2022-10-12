---
name: Reset a token
example: octokit.rest.apps.resetToken({ client_id, access_token })
route: PATCH /applications/{client_id}/token
scope: apps
type: API method
---

# Reset a token

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.rest.apps.resetToken({
  client_id,
  access_token,
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

The client ID of the GitHub app.

</td></tr>
<tr><td>access_token</td><td>yes</td><td>

The access_token of the OAuth application.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#reset-a-token).
