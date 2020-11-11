---
name: Update a repository invitation
example: octokit.repos.updateInvitation({ owner, repo, invitation_id })
route: PATCH /repos/{owner}/{repo}/invitations/{invitation_id}
scope: repos
type: API method
---

# Update a repository invitation

```js
octokit.repos.updateInvitation({
  owner,
  repo,
  invitation_id
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

invitation_id parameter

</td></tr>
<tr><td>permissions</td><td>no</td><td>

The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-a-repository-invitation).
