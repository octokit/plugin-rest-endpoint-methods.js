---
name: Check a token
example: octokit.rest.apps.checkToken({ client_id, access_token })
route: POST /applications/{client_id}/token
scope: apps
type: API method
---

# Check a token

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

```js
octokit.rest.apps.checkToken({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#check-a-token).
