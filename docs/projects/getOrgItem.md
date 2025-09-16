---
name: Get an item for an organization owned project
example: octokit.rest.projects.getOrgItem({ project_number, org, item_id })
route: GET /orgs/{org}/projectsV2/{project_number}/items/{item_id}
scope: projects
type: API method
---

# Get an item for an organization owned project

Get a specific item from an organization-owned project.

```js
octokit.rest.projects.getOrgItem({
  project_number,
  org,
  item_id,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>item_id</td><td>yes</td><td>

The unique identifier of the project item.

</td></tr>
<tr><td>fields</td><td>no</td><td>

Limit results to specific fields, by their IDs. If not specified, the title field will be returned.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#get-an-item-for-an-organization-owned-project).
