---
name: Delete a repository invitation
example: octokit.rest.repos.deleteInvitation({ owner, repo, invitation_id })
route: DELETE /repos/{owner}/{repo}/invitations/{invitation_id}
scope: repos
type: API method
---

# Delete a repository invitation

```js
octokit.rest.repos.deleteInvitation({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>invitation_id</td><td>yes</td><td>

The unique identifier of the invitation.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-a-repository-invitation).
