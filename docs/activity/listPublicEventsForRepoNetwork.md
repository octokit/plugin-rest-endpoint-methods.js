---
name: List public events for a network of repositories
example: octokit.rest.activity.listPublicEventsForRepoNetwork({ owner, repo })
route: GET /networks/{owner}/{repo}/events
scope: activity
type: API method
---

# List public events for a network of repositories

```js
octokit.rest.activity.listPublicEventsForRepoNetwork({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories).
