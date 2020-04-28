---
name: Convert member to outside collaborator
example: octokit.orgs.convertMemberToOutsideCollaborator({ org, username })
route: PUT /orgs/{org}/outside_collaborators/{username}
scope: orgs
type: API method
---

# Convert member to outside collaborator

When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".

```js
octokit.orgs.convertMemberToOutsideCollaborator({
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

org parameter

</td></tr>
<tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/outside_collaborators/#convert-member-to-outside-collaborator).
