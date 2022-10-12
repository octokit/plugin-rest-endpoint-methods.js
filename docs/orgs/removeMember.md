---
name: Remove an organization member
example: octokit.rest.orgs.removeMember({ org, username })
route: DELETE /orgs/{org}/members/{username}
scope: orgs
type: API method
---

# Remove an organization member

Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.

```js
octokit.rest.orgs.removeMember({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#remove-an-organization-member).
