---
name: Set primary email visibility for the authenticated user
example: octokit.rest.users.setPrimaryEmailVisibilityForAuthenticatedUser({ visibility })
route: PATCH /user/email/visibility
scope: users
type: API method
---

# Set primary email visibility for the authenticated user

Sets the visibility for your primary email addresses.

```js
octokit.rest.users.setPrimaryEmailVisibilityForAuthenticatedUser({
  visibility,
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
    <tr><td>visibility</td><td>yes</td><td>

Denotes whether an email is publicly visible.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/users#set-primary-email-visibility-for-the-authenticated-user).
