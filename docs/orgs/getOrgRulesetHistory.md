---
name: Get organization ruleset history
example: octokit.rest.orgs.getOrgRulesetHistory({ org, ruleset_id })
route: GET /orgs/{org}/rulesets/{ruleset_id}/history
scope: orgs
type: API method
---

# Get organization ruleset history

Get the history of an organization ruleset.

```js
octokit.rest.orgs.getOrgRulesetHistory({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rules#get-organization-ruleset-history).
