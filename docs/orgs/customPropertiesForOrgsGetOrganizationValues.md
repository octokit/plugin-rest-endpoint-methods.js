---
name: Get all custom property values for an organization
example: octokit.rest.orgs.customPropertiesForOrgsGetOrganizationValues({ org })
route: GET /organizations/{org}/org-properties/values
scope: orgs
type: API method
---

# Get all custom property values for an organization

Gets all custom property values that are set for an organization.

The organization must belong to an enterprise.

Access requirements:

- Organization admins
- OAuth tokens and personal access tokens (classic) with the `read:org` scope
- Actors with the organization-level "read custom properties for an organization" fine-grained permission or above

```js
octokit.rest.orgs.customPropertiesForOrgsGetOrganizationValues({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/custom-properties-for-orgs#get-all-custom-property-values-for-an-organization).
