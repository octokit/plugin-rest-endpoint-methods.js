---
name: List repository invitations for the authenticated user
example: octokit.rest.repos.listInvitationsForAuthenticatedUser()
route: GET /user/repository_invitations
scope: repos
type: API method
---

# List repository invitations for the authenticated user

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

```js
octokit.rest.repos.listInvitationsForAuthenticatedUser();
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

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user).
