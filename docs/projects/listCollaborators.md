---
name: List project collaborators
example: octokit.rest.projects.listCollaborators({ project_id })
route: GET /projects/{project_id}/collaborators
scope: projects
type: API method
---

# List project collaborators

Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.

```js
octokit.rest.projects.listCollaborators({
  project_id,
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
    <tr><td>project_id</td><td>yes</td><td>

</td></tr>
<tr><td>affiliation</td><td>no</td><td>

Filters the collaborators by their affiliation. Can be one of:  
\* `outside`: Outside collaborators of a project that are not a member of the project's organization.  
\* `direct`: Collaborators with permissions to a project, regardless of organization membership status.  
\* `all`: All collaborators the authenticated user can see.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#list-project-collaborators).
