---
name: List repositories watched by the authenticated user
example: octokit.rest.activity.listWatchedReposForAuthenticatedUser()
route: GET /user/subscriptions
scope: activity
type: API method
---

# List repositories watched by the authenticated user

Lists repositories the authenticated user is watching.

```js
octokit.rest.activity.listWatchedReposForAuthenticatedUser();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#list-repositories-watched-by-the-authenticated-user).
