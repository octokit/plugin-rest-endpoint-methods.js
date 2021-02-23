---
name: List public repositories
example: octokit.repos.listPublic()
route: GET /repositories
scope: repos
type: API method
---

# List public repositories

Lists all public repositories in the order that they were created.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.

```js
octokit.repos.listPublic();
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
    <tr><td>since</td><td>no</td><td>

A repository ID. Only return repositories with an ID greater than this ID.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos/#list-public-repositories).
