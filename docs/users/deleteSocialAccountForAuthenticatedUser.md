---
name: Delete social accounts for the authenticated user
example: octokit.rest.users.deleteSocialAccountForAuthenticatedUser({ account_urls })
route: DELETE /user/social_accounts
scope: users
type: API method
---

# Delete social accounts for the authenticated user

Deletes one or more social accounts from the authenticated user's profile.

OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```js
octokit.rest.users.deleteSocialAccountForAuthenticatedUser({
  account_urls,
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
    <tr><td>account_urls</td><td>yes</td><td>

Full URLs for the social media profiles to delete.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/social-accounts#delete-social-accounts-for-the-authenticated-user).
