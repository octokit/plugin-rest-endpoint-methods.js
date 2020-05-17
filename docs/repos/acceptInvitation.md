---
name: Accept a repository invitation
example: octokit.repos.acceptInvitation({ invitation_id })
route: PATCH /user/repository_invitations/{invitation_id}
scope: repos
type: API method
---

# Accept a repository invitation

```js
octokit.repos.acceptInvitation({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/invitations/#accept-a-repository-invitation).
