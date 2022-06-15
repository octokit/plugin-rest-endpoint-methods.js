---
name: Get top referral paths
example: octokit.rest.repos.getTopPaths({ owner, repo })
route: GET /repos/{owner}/{repo}/traffic/popular/paths
scope: repos
type: API method
---

# Get top referral paths

Get the top 10 popular contents over the last 14 days.

```js
octokit.rest.repos.getTopPaths({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-top-referral-paths).
