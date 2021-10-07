---
name: Decline a repository invitation
example: octokit.rest.repos.declineInvitationForAuthenticatedUser({ invitation_id })
route: DELETE /user/repository_invitations/{invitation_id}
scope: repos
type: API method
---

# Decline a repository invitation

```js
octokit.rest.repos.declineInvitationForAuthenticatedUser({
  invitation_id,
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
    <tr><td>invitation_id</td><td>yes</td><td>

invitation_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#decline-a-repository-invitation).
