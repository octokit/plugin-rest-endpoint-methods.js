---
name: Get top referral sources
example: octokit.repos.getTopReferrers({ owner, repo })
route: GET /repos/{owner}/{repo}/traffic/popular/referrers
scope: repos
type: API method
---

# Get top referral sources

Get the top 10 referrers over the last 14 days.

```js
octokit.repos.getTopReferrers({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/traffic/#get-top-referral-sources).
