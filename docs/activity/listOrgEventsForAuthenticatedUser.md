---
name: List organization events for the authenticated user
example: octokit.activity.listOrgEventsForAuthenticatedUser({ username, org })
route: GET /users/{username}/events/orgs/{org}
scope: activity
type: API method
---

# List organization events for the authenticated user

This is the user's organization dashboard. You must be authenticated as the user to view this.

```js
octokit.activity.listOrgEventsForAuthenticatedUser({
  username,
  org,
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
<tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/events/#list-organization-events-for-the-authenticated-user).
