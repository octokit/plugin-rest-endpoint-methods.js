---
name: Remove outside collaborator from an organization
example: octokit.rest.orgs.removeOutsideCollaborator({ org, username })
route: DELETE /orgs/{org}/outside_collaborators/{username}
scope: orgs
type: API method
---

# Remove outside collaborator from an organization

Removing a user from this list will remove them from all the organization's repositories.

```js
octokit.rest.orgs.removeOutsideCollaborator({
  org,
  username,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization).
