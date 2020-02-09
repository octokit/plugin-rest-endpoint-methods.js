# Unfollow a user

Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.

```js
octokit.users.unfollow(username);
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

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
