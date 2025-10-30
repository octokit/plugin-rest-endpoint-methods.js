---
name: Get all custom properties for an organization
example: octokit.rest.orgs.customPropertiesForReposGetOrganizationDefinitions({ org })
route: GET /orgs/{org}/properties/schema
scope: orgs
type: API method
---

# Get all custom properties for an organization

Gets all custom properties defined for an organization.
Organization members can read these properties.

```js
octokit.rest.orgs.customPropertiesForReposGetOrganizationDefinitions({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties#get-all-custom-properties-for-an-organization).
