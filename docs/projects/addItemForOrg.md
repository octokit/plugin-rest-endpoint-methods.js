---
name: Add item to organization owned project
example: octokit.rest.projects.addItemForOrg({ org, project_number, type, id })
route: POST /orgs/{org}/projectsV2/{project_number}/items
scope: projects
type: API method
---

# Add item to organization owned project

Add an issue or pull request item to the specified organization owned project.

```js
octokit.rest.projects.addItemForOrg({
  org,
  project_number,
  type,
  id,
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
<tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>type</td><td>yes</td><td>

The type of item to add to the project. Must be either Issue or PullRequest.

</td></tr>
<tr><td>id</td><td>yes</td><td>

The numeric ID of the issue or pull request to add to the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#add-item-to-organization-owned-project).
