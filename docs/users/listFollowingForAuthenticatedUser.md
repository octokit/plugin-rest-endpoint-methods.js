# List users followed by the authenticated user

**Deprecated:** This method has been renamed to users.listFollowedByAuthenticated

Lists the people who the authenticated user follows.

```js
octokit.users.listFollowingForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/followers/#list-users-followed-by-the-authenticated-user).
