---
name: List email addresses for the authenticated user
example: octokit.users.listEmails()
route: GET /user/emails
scope: users
type: API method
---

# List email addresses for the authenticated user

**Deprecated:** This method has been renamed to users.listEmailsForAuthenticated

Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.

```js
octokit.users.listEmails();
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user).
