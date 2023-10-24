---
name: List custom property values for organization repositories
example: octokit.rest.orgs.listCustomPropertiesValuesForRepos({ org })
route: GET /orgs/{org}/properties/values
scope: orgs
type: API method
---

# List custom property values for organization repositories

Lists organization repositories with all of their custom property values.
Organization members can read these properties.

```js
octokit.rest.orgs.listCustomPropertiesValuesForRepos({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/properties#list-custom-property-values-for-organization-repositories).
