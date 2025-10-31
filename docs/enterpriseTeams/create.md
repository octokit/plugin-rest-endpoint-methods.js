---
name: Create an enterprise team
example: octokit.rest.enterpriseTeams.create({ enterprise, name })
route: POST /enterprises/{enterprise}/teams
scope: enterpriseTeams
type: API method
---

# Create an enterprise team

To create an enterprise team, the authenticated user must be an owner of the enterprise.

```js
octokit.rest.enterpriseTeams.create({
  enterprise,
  name,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the team.

</td></tr>
<tr><td>description</td><td>no</td><td>

A description of the team.

</td></tr>
<tr><td>sync_to_organizations</td><td>no</td><td>

Retired: this field is no longer supported.
Whether the enterprise team should be reflected in each organization.
This value cannot be set.

</td></tr>
<tr><td>organization_selection_type</td><td>no</td><td>

Specifies which organizations in the enterprise should have access to this team. Can be one of `disabled`, `selected`, or `all`.
`disabled`: The team is not assigned to any organizations. This is the default when you create a new team.
`selected`: The team is assigned to specific organizations. You can then use the [add organization assignments API](https://docs.github.com/rest/enterprise-teams/enterprise-team-organizations#add-organization-assignments) endpoint.
`all`: The team is assigned to all current and future organizations in the enterprise.

</td></tr>
<tr><td>group_id</td><td>no</td><td>

The ID of the IdP group to assign team membership with. You can get this value from the [REST API endpoints for SCIM](https://docs.github.com/rest/scim#list-provisioned-scim-groups-for-an-enterprise).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/enterprise-teams/enterprise-teams#create-an-enterprise-team).
