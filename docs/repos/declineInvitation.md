---
name: Decline a repository invitation
example: octokit.rest.repos.declineInvitation({ invitation_id })
route: DELETE /user/repository_invitations/{invitation_id}
scope: repos
type: API method
---

# Decline a repository invitation

**Deprecated:** This method has been renamed to repos.declineInvitationForAuthenticatedUser

```js
octokit.rest.repos.declineInvitation({
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

The unique identifier of the invitation.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/invitations#decline-a-repository-invitation).
