---
name: List repository invitations
example: octokit.repos.listInvitations({ owner, repo })
route: GET /repos/{owner}/{repo}/invitations
scope: repos
type: API method
---

# List repository invitations

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

```js
octokit.repos.listInvitations({
  owner,
  repo,
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/invitations/#list-repository-invitations).
