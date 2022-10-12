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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#list-public-events-for-a-network-of-repositories).
