---
name: Create or update custom property values for organization repositories
example: octokit.rest.orgs.createOrUpdateCustomPropertiesValuesForRepos({ org, repository_names, properties, properties[].property_name, properties[].value })
route: PATCH /orgs/{org}/properties/values
scope: orgs
type: API method
---

# Create or update custom property values for organization repositories

Create new or update existing custom property values for repositories in a batch that belong to an organization.
Each target repository will have its custom property values updated to match the values provided in the request.

A maximum of 30 repositories can be updated in a single request.

Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.

Only organization owners (or users with the proper permissions granted by them) can update these properties

```js
octokit.rest.orgs.createOrUpdateCustomPropertiesValuesForRepos({
        org,
repository_names,
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
<tr><td>repository_names</td><td>yes</td><td>

The names of repositories that the custom property values will be applied to.

</td></tr>
<tr><td>properties</td><td>yes</td><td>

List of custom property names and associated values to apply to the repositories.

</td></tr>
<tr><td>properties[].property_name</td><td>yes</td><td>

The name of the property

</td></tr>
<tr><td>properties[].value</td><td>yes</td><td>

The value assigned to the property

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties#create-or-update-custom-property-values-for-organization-repositories).
