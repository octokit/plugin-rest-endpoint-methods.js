---
name: List repositories watched by a user
example: octokit.activity.listReposWatchedByUser({ username })
route: GET /users/{username}/subscriptions
scope: activity
type: API method
---

# List repositories watched by a user

Lists repositories a user is watching.

```js
octokit.activity.listReposWatchedByUser({
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

username parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/watching/#list-repositories-watched-by-a-user).
