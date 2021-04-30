---
name: Create an organization project
example: octokit.rest.projects.createForOrg({ org, name })
route: POST /orgs/{org}/projects
scope: projects
type: API method
---

# Create an organization project

Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.

```js
octokit.rest.projects.createForOrg({
  org,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the project.

</td></tr>
<tr><td>body</td><td>no</td><td>

The description of the project.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#create-an-organization-project).
