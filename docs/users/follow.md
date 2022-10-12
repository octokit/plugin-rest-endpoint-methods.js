---
name: Follow a user
example: octokit.rest.users.follow({ username })
route: PUT /user/following/{username}
scope: users
type: API method
---

# Follow a user

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#follow-a-user).
