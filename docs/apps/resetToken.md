# Reset a token

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.apps.resetToken({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/oauth_applications/#reset-a-token).
