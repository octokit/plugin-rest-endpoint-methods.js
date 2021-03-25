---
name: Create a project card
example: octokit.rest.projects.createCard({ column_id, note, content_id, content_type })
route: POST /projects/columns/{column_id}/cards
scope: projects
type: API method
---

# Create a project card

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.rest.projects.createCard({
  column_id,
  note,
  content_id,
  content_type,
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
    <tr><td>column_id</td><td>yes</td><td>

column_id parameter

</td></tr>
<tr><td>note</td><td>yes</td><td>

The project card's note

</td></tr>
<tr><td>content_id</td><td>yes</td><td>

The unique identifier of the content associated with the card

</td></tr>
<tr><td>content_type</td><td>yes</td><td>

The piece of content associated with the card

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/projects#create-a-project-card).
