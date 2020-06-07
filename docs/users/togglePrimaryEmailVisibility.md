---
name: Set primary email visibility for the authenticated user
example: octokit.users.togglePrimaryEmailVisibility({ email, visibility })
route: PATCH /user/email/visibility
scope: users
type: API method
---

# Set primary email visibility for the authenticated user

**Deprecated:** This method has been renamed to users.setPrimaryEmailVisibilityForAuthenticated

Sets the visibility for your primary email addresses.

```js
octokit.users.togglePrimaryEmailVisibility({
  email,
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
    <tr><td>email</td><td>yes</td><td>

Specify the _primary_ email address that needs a visibility change.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

Use `public` to enable an authenticated user to view the specified email address, or use `private` so this primary email address cannot be seen publicly.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user).
