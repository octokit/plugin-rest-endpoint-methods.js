---
name: Remove a custom property for an organization
example: octokit.rest.orgs.removeCustomProperty({ org, custom_property_name })
route: DELETE /orgs/{org}/properties/schema/{custom_property_name}
scope: orgs
type: API method
---

# Remove a custom property for an organization

Removes a custom property that is defined for an organization.
You must be an organization owner to use this endpoint.

```js
octokit.rest.orgs.removeCustomProperty({
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

The custom property name. The name is case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/properties#remove-a-custom-property-for-an-organization).
