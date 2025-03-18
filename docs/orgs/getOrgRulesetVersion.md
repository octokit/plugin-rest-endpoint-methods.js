---
name: Get organization ruleset version
example: octokit.rest.orgs.getOrgRulesetVersion({ org, ruleset_id, version_id })
route: GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}
scope: orgs
type: API method
---

# Get organization ruleset version

Get a version of an organization ruleset.

```js
octokit.rest.orgs.getOrgRulesetVersion({
  org,
  ruleset_id,
  version_id,
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
<tr><td>version_id</td><td>yes</td><td>

The ID of the version

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rules#get-organization-ruleset-version).
