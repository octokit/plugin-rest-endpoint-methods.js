---
name: Get project for organization
example: octokit.rest.projects.getForOrg({ project_number, org })
route: GET /orgs/{org}/projectsV2/{project_number}
scope: projects
type: API method
---

# Get project for organization

Get a specific organization-owned project.

```js
octokit.rest.projects.getForOrg({
  project_number,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/projects#get-project-for-organization).
