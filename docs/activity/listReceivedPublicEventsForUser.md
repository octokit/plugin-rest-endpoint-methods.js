---
name: List public events received by a user
example: octokit.rest.activity.listReceivedPublicEventsForUser({ username })
route: GET /users/{username}/received_events/public
scope: activity
type: API method
---

# List public events received by a user

```js
octokit.rest.activity.listReceivedPublicEventsForUser({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user).
