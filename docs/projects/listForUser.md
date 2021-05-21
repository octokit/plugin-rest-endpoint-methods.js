---
name: List user projects
example: octokit.rest.projects.listForUser({ username })
route: GET /users/{username}/projects
scope: projects
type: API method
---

# List user projects

```js
octokit.rest.projects.listForUser({
  username,
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
    <tr><td>username</td><td>yes</td><td>

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#list-user-projects).
