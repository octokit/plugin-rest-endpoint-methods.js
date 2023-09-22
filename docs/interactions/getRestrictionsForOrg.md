---
name: Get interaction restrictions for an organization
example: octokit.rest.interactions.getRestrictionsForOrg({ org })
route: GET /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Get interaction restrictions for an organization

Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.

```js
octokit.rest.interactions.getRestrictionsForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/orgs#get-interaction-restrictions-for-an-organization).
