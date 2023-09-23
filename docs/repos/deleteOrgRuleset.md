---
name: Delete an organization repository ruleset
example: octokit.rest.repos.deleteOrgRuleset({ org, ruleset_id })
route: DELETE /orgs/{org}/rulesets/{ruleset_id}
scope: repos
type: API method
---

# Delete an organization repository ruleset

Delete a ruleset for an organization.

```js
octokit.rest.repos.deleteOrgRuleset({
  org,
  ruleset_id,
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
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rules#delete-an-organization-repository-ruleset).
