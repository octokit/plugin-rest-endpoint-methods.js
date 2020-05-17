---
name: Create a project card
example: octokit.projects.createCard({ column_id })
route: POST /projects/columns/{column_id}/cards
scope: projects
type: API method
---

# Create a project card

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.

```js
octokit.projects.createCard({
  column_id,
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

</td></tr>
<tr><td>note</td><td>no</td><td>

The card's note content. Only valid for cards without another type of content, so you must omit when specifying `content_id` and `content_type`.

</td></tr>
<tr><td>content_id</td><td>no</td><td>

The issue or pull request id you want to associate with this card. You can use the [List repository issues](https://developer.github.com/v3/issues/#list-repository-issues) and [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoints to find this id.  
**Note:** Depending on whether you use the issue id or pull request id, you will need to specify `Issue` or `PullRequest` as the `content_type`.

</td></tr>
<tr><td>content_type</td><td>no</td><td>

**Required if you provide `content_id`**. The type of content you want to associate with this card. Use `Issue` when `content_id` is an issue id and use `PullRequest` when `content_id` is a pull request id.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/projects/cards/#create-a-project-card).
