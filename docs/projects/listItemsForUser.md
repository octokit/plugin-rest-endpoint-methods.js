---
name: List items for a user owned project
example: octokit.rest.projects.listItemsForUser({ project_number, username })
route: GET /users/{username}/projectsV2/{project_number}/items
scope: projects
type: API method
---

# List items for a user owned project

List all items for a specific user-owned project accessible by the authenticated user.

```js
octokit.rest.projects.listItemsForUser({
  project_number,
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
    <tr><td>project_number</td><td>yes</td><td>

The project's number.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>q</td><td>no</td><td>

Search query to filter items, see [Filtering projects](https://docs.github.com/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) for more information.

</td></tr>
<tr><td>fields</td><td>no</td><td>

Limit results to specific fields, by their IDs. If not specified, the title field will be returned.

Example: `fields[]=123&fields[]=456&fields[]=789` or `fields=123,456,789`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/projects/items#list-items-for-a-user-owned-project).
