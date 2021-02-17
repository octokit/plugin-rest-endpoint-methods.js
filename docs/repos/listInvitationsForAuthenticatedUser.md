---
name: List repository invitations for the authenticated user
example: octokit.repos.listInvitationsForAuthenticatedUser()
route: GET /user/repository_invitations
scope: repos
type: API method
---

# List repository invitations for the authenticated user

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

```js
octokit.repos.listInvitationsForAuthenticatedUser();
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

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-repository-invitations-for-the-authenticated-user).
