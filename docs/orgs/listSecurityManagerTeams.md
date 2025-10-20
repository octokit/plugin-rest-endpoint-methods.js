---
name: List security manager teams
example: octokit.rest.orgs.listSecurityManagerTeams({ org })
route: GET /orgs/{org}/security-managers
scope: orgs
type: API method
---

# List security manager teams

**This method is deprecated.**

> [!WARNING]
> **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.

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
