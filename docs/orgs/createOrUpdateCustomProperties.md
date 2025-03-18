---
name: Create or update custom properties for an organization
example: octokit.rest.orgs.createOrUpdateCustomProperties({ org, properties, properties[].property_name, properties[].value_type })
route: PATCH /orgs/{org}/properties/schema
scope: orgs
type: API method
---

# Create or update custom properties for an organization

Creates new or updates existing custom properties defined for an organization in a batch.

If the property already exists, the existing property will be replaced with the new values.
Missing optional values will fall back to default values, previous values will be overwritten.
E.g. if a property exists with `values_editable_by: org_and_repo_actors` and it's updated without specifying `values_editable_by`, it will be updated to default value `org_actors`.

To use this endpoint, the authenticated user must be one of:

- An administrator for the organization.
- A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.

```js
octokit.rest.orgs.createOrUpdateCustomProperties({
        org,
properties,
properties[].property_name,
properties[].value_type
      })
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
<tr><td>properties</td><td>yes</td><td>

The array of custom properties to create or update.

</td></tr>
<tr><td>properties[].property_name</td><td>yes</td><td>

The name of the property

</td></tr>
<tr><td>properties[].url</td><td>no</td><td>

The URL that can be used to fetch, update, or delete info about this property via the API.

</td></tr>
<tr><td>properties[].source_type</td><td>no</td><td>

The source type of the property

</td></tr>
<tr><td>properties[].value_type</td><td>yes</td><td>

The type of the value for the property

</td></tr>
<tr><td>properties[].required</td><td>no</td><td>

Whether the property is required.

</td></tr>
<tr><td>properties[].default_value</td><td>no</td><td>

Default value of the property

</td></tr>
<tr><td>properties[].description</td><td>no</td><td>

Short description of the property

</td></tr>
<tr><td>properties[].allowed_values</td><td>no</td><td>

An ordered list of the allowed values of the property.
The property can have up to 200 allowed values.

</td></tr>
<tr><td>properties[].values_editable_by</td><td>no</td><td>

Who can edit the values of the property

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties#create-or-update-custom-properties-for-an-organization).
