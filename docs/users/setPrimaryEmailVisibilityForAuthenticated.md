---
name: Set primary email visibility for the authenticated user
example: octokit.users.setPrimaryEmailVisibilityForAuthenticated({ email, visibility })
route: PATCH /user/email/visibility
scope: users
type: API method
---

# Set primary email visibility for the authenticated user

Sets the visibility for your primary email addresses.

```js
octokit.users.setPrimaryEmailVisibilityForAuthenticated({
  email,
  visibility
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

An email address associated with the GitHub user account to manage.

</td></tr>
<tr><td>visibility</td><td>yes</td><td>

Denotes whether an email is publically visible.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user).
