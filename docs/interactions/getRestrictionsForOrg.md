---
name: Get interaction restrictions for an organization
example: octokit.interactions.getRestrictionsForOrg({ org })
route: GET /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Get interaction restrictions for an organization

Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.

```js
octokit.interactions.getRestrictionsForOrg({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization).
