---
name: Set primary email visibility for the authenticated user
example: octokit.rest.users.setPrimaryEmailVisibilityForAuthenticated({ visibility })
route: PATCH /user/email/visibility
scope: users
type: API method
---

# Set primary email visibility for the authenticated user

**Deprecated:** This method has been renamed to users.setPrimaryEmailVisibilityForAuthenticatedUser

Sets the visibility for your primary email addresses.

```js
octokit.rest.users.setPrimaryEmailVisibilityForAuthenticated({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/emails#set-primary-email-visibility-for-the-authenticated-user).
