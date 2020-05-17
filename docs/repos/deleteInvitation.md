---
name: Delete a repository invitation
example: octokit.repos.deleteInvitation({ owner, repo, invitation_id })
route: DELETE /repos/{owner}/{repo}/invitations/{invitation_id}
scope: repos
type: API method
---

# Delete a repository invitation

```js
octokit.repos.deleteInvitation({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>invitation_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/invitations/#delete-a-repository-invitation).
