---
name: Remove outside collaborator
example: octokit.orgs.removeOutsideCollaborator({ org, username })
route: DELETE /orgs/{org}/outside_collaborators/{username}
scope: orgs
type: API method
---

# Remove outside collaborator

Removing a user from this list will remove them from all the organization's repositories.

```js
octokit.orgs.removeOutsideCollaborator({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/outside_collaborators/#remove-outside-collaborator).
