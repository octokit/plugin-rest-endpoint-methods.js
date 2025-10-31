---
name: Create or update custom property values for a repository
example: octokit.rest.repos.customPropertiesForReposCreateOrUpdateRepositoryValues({ owner, repo, properties, properties[].property_name, properties[].value })
route: PATCH /repos/{owner}/{repo}/properties/values
scope: repos
type: API method
---

# Create or update custom property values for a repository

Create new or update existing custom property values for a repository.
Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.

Repository admins and other users with the repository-level "edit custom property values" fine-grained permission can use this endpoint.

```js
octokit.rest.repos.customPropertiesForReposCreateOrUpdateRepositoryValues({
        owner,
repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>properties</td><td>yes</td><td>

A list of custom property names and associated values to apply to the repositories.

</td></tr>
<tr><td>properties[].property_name</td><td>yes</td><td>

The name of the property

</td></tr>
<tr><td>properties[].value</td><td>yes</td><td>

The value assigned to the property

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/custom-properties#create-or-update-custom-property-values-for-a-repository).
