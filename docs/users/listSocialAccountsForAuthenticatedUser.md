---
name: List social accounts for the authenticated user
example: octokit.rest.users.listSocialAccountsForAuthenticatedUser()
route: GET /user/social_accounts
scope: users
type: API method
---

# List social accounts for the authenticated user

Lists all of your social accounts.

```js
octokit.rest.users.listSocialAccountsForAuthenticatedUser();
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

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/social-accounts#list-social-accounts-for-the-authenticated-user).
