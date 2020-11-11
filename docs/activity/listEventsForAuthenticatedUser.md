---
name: List events for the authenticated user
example: octokit.activity.listEventsForAuthenticatedUser({ username })
route: GET /users/{username}/events
scope: activity
type: API method
---

# List events for the authenticated user

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.

```js
octokit.activity.listEventsForAuthenticatedUser({
  username
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

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user).
