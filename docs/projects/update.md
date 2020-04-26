---
name: Update a project
example: octokit.projects.update({ project_id })
route: PATCH /projects/{project_id}
scope: projects
type: API method
---

# Update a project

Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

```js
octokit.projects.update({
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

project_id parameter

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the project.

</td></tr>
<tr><td>body</td><td>no</td><td>

The description of the project.

</td></tr>
<tr><td>state</td><td>no</td><td>

State of the project. Either `open` or `closed`.

</td></tr>
<tr><td>organization_permission</td><td>no</td><td>

The permission level that determines whether all members of the project's organization can see and/or make changes to the project. Setting `organization_permission` is only available for organization projects. If an organization member belongs to a team with a higher level of access or is a collaborator with a higher level of access, their permission level is not lowered by `organization_permission`. For information on changing access for a team or collaborator, see [Add or update team project](https://developer.github.com/v3/teams/#add-or-update-team-project) or [Add user as a collaborator](https://developer.github.com/v3/projects/collaborators/#add-user-as-a-collaborator).

**Note:** Updating a project's `organization_permission` requires `admin` access to the project.

Can be one of:  
\* `read` - Organization members can read, but not write to or administer this project.  
\* `write` - Organization members can read and write, but not administer this project.  
\* `admin` - Organization members can read, write and administer this project.  
\* `none` - Organization members can only see this project if it is public.

</td></tr>
<tr><td>private</td><td>no</td><td>

Sets the visibility of a project board. Setting `private` is only available for organization and user projects. **Note:** Updating a project's visibility requires `admin` access to the project.

Can be one of:  
\* `false` - Anyone can see the project.  
\* `true` - Only the user can view a project board created on a user account. Organization members with the appropriate `organization_permission` can see project boards in an organization account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/#update-a-project).
