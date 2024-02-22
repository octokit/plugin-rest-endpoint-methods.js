---
name: List repositories starred by the authenticated user
example: octokit.rest.activity.listReposStarredByAuthenticatedUser()
route: GET /user/starred
scope: activity
type: API method
---

# List repositories starred by the authenticated user

Lists repositories the authenticated user has starred.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.

```js
octokit.rest.activity.listReposStarredByAuthenticatedUser();
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
    <tr><td>sort</td><td>no</td><td>

The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/starring#list-repositories-starred-by-the-authenticated-user).
