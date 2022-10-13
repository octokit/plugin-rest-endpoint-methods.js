---
name: List repositories starred by the authenticated user
example: octokit.rest.activity.listReposStarredByAuthenticatedUser()
route: GET /user/starred
scope: activity
type: API method
---

# List repositories starred by the authenticated user

Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.

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

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user).
