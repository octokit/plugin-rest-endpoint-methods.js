---
name: Get an item for a user owned project
example: octokit.rest.projects.getUserItem({ project_number, username, item_id })
route: GET /users/{username}/projectsV2/{project_number}/items/{item_id}
scope: projects
type: API method
---

# Get an item for a user owned project

Get a specific item from a user-owned project.

```js
octokit.rest.projects.getUserItem({
  project_number,
  username,
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
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>item_id</td><td>yes</td><td>

The unique identifier of the project item.

</td></tr>
<tr><td>fields</td><td>no</td><td>

Limit results to specific fields, by their IDs. If not specified, the title field will be returned.

Example: fields[]=123&fields[]=456&fields[]=789 or fields=123,456,789

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#get-an-item-for-a-user-owned-project).
