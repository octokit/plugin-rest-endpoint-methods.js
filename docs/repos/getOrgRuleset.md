---
name: Get an organization repository ruleset
example: octokit.rest.repos.getOrgRuleset({ org, ruleset_id })
route: GET /orgs/{org}/rulesets/{ruleset_id}
scope: repos
type: API method
---

# Get an organization repository ruleset

Get a repository ruleset for an organization.

**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user
making the API request has write access to the ruleset.

```js
octokit.rest.repos.getOrgRuleset({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rules#get-an-organization-repository-ruleset).
