---
name: Create or update custom property values for an organization
example: octokit.rest.orgs.customPropertiesForOrgsCreateOrUpdateOrganizationValues({ org, properties, properties[].property_name, properties[].value })
route: PATCH /organizations/{org}/org-properties/values
scope: orgs
type: API method
---

# Create or update custom property values for an organization

Create new or update existing custom property values for an organization.
To remove a custom property value from an organization, set the property value to `null`.

The organization must belong to an enterprise.

Access requirements:

- Organization admins
- OAuth tokens and personal access tokens (classic) with the `admin:org` scope
- Actors with the organization-level "edit custom properties for an organization" fine-grained permission

```js
octokit.rest.orgs.customPropertiesForOrgsCreateOrUpdateOrganizationValues({
        org,
properties,
properties[].property_name,
properties[].value
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

A list of custom property names and associated values to apply to the organization.

</td></tr>
<tr><td>properties[].property_name</td><td>yes</td><td>

The name of the property

</td></tr>
<tr><td>properties[].value</td><td>yes</td><td>

The value assigned to the property

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties-for-orgs#create-or-update-custom-property-values-for-an-organization).
