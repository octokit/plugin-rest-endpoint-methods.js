---
name: List security manager teams
example: octokit.rest.orgs.listSecurityManagerTeams({ org })
route: GET /orgs/{org}/security-managers
scope: orgs
type: API method
---

# List security manager teams

Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.

GitHub Apps must have the `administration` organization read permission to use this endpoint.

```js
octokit.rest.orgs.listSecurityManagerTeams({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams).
