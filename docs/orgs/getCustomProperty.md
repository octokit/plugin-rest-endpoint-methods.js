---
name: Get a custom property for an organization
example: octokit.rest.orgs.getCustomProperty({ org, custom_property_name })
route: GET /orgs/{org}/properties/schema/{custom_property_name}
scope: orgs
type: API method
---

# Get a custom property for an organization

Gets a custom property that is defined for an organization.
Organization members can read these properties.

```js
octokit.rest.orgs.getCustomProperty({
  org,
  custom_property_name,
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
<tr><td>custom_property_name</td><td>yes</td><td>

The custom property name

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties#get-a-custom-property-for-an-organization).
