---
name: List email addresses for the authenticated user
example: octokit.rest.users.listEmailsForAuthenticated()
route: GET /user/emails
scope: users
type: API method
---

# List email addresses for the authenticated user

**Deprecated:** This method has been renamed to users.listEmailsForAuthenticatedUser

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

```js
octokit.rest.users.listEmailsForAuthenticated();
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/emails#list-email-addresses-for-the-authenticated-user).
