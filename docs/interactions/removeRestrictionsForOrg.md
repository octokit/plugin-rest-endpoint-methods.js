---
name: Remove interaction restrictions for an organization
example: octokit.rest.interactions.removeRestrictionsForOrg({ org })
route: DELETE /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Remove interaction restrictions for an organization

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

```js
octokit.rest.interactions.removeRestrictionsForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/interactions#remove-interaction-restrictions-for-an-organization).
