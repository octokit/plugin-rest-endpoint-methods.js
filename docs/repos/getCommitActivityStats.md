---
name: Get the last year of commit activity data
example: octokit.repos.getCommitActivityStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/commit_activity
scope: repos
type: API method
---

# Get the last year of commit activity data

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

```js
octokit.repos.getCommitActivityStats({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/statistics/#get-the-last-year-of-commit-activity-data).
