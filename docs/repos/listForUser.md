---
name: List repositories for a user
example: octokit.rest.repos.listForUser({ username })
route: GET /users/{username}/repos
scope: repos
type: API method
---

# List repositories for a user

Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.

```js
octokit.rest.repos.listForUser({
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

The handle for the GitHub user account.

</td></tr>
<tr><td>type</td><td>no</td><td>

Limit results to repositories of the specified type.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-repositories-for-a-user).
