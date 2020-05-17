---
name: List public organization events
example: octokit.activity.listPublicEventsForOrg({ org })
route: GET /orgs/{org}/events
scope: activity
type: API method
---

# List public organization events

**Deprecated:** This method has been renamed to activity.listPublicOrgEvents

```js
octokit.activity.listPublicEventsForOrg({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/events/#list-public-organization-events).
