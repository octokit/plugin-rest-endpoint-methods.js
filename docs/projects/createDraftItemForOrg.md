---
name: Create draft item for organization owned project
example: octokit.rest.projects.createDraftItemForOrg({ org, project_number, title })
route: POST /orgs/{org}/projectsV2/{project_number}/drafts
scope: projects
type: API method
---

# Create draft item for organization owned project

Create draft issue item for the specified organization owned project.

```js
octokit.rest.projects.createDraftItemForOrg({
  org,
  project_number,
  title,
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
<tr><td>title</td><td>yes</td><td>

The title of the draft issue item to create in the project.

</td></tr>
<tr><td>body</td><td>no</td><td>

The body content of the draft issue item to create in the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/drafts#create-draft-item-for-organization-owned-project).
