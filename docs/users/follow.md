---
name: Follow a user
example: octokit.rest.users.follow({ username })
route: PUT /user/following/{username}
scope: users
type: API method
---

# Follow a user

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."

OAuth app tokens and personal access tokens (classic) need the `user:follow` scope to use this endpoint.

```js
octokit.rest.users.follow({
  username,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/followers#follow-a-user).
