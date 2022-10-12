---
name: Delete an email address for the authenticated user
example: octokit.rest.users.deleteEmailForAuthenticatedUser({ emails })
route: DELETE /user/emails
scope: users
type: API method
---

# Delete an email address for the authenticated user

This endpoint is accessible with the `user` scope.

```js
octokit.rest.users.deleteEmailForAuthenticatedUser({
  emails,
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
    <tr><td>emails</td><td>yes</td><td>

Email addresses associated with the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#delete-an-email-address-for-the-authenticated-user).
