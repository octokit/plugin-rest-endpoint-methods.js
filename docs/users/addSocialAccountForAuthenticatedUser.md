---
name: Add social accounts for the authenticated user
example: octokit.rest.users.addSocialAccountForAuthenticatedUser({ account_urls })
route: POST /user/social_accounts
scope: users
type: API method
---

# Add social accounts for the authenticated user

Add one or more social accounts to the authenticated user's profile. This endpoint is accessible with the `user` scope.

```js
octokit.rest.users.addSocialAccountForAuthenticatedUser({
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

Full URLs for the social media profiles to add.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/social-accounts#add-social-accounts-for-the-authenticated-user).
