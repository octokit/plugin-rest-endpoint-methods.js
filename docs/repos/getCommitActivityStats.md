---
name: Get the last year of commit activity
example: octokit.repos.getCommitActivityStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/commit_activity
scope: repos
type: API method
---

# Get the last year of commit activity

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

```js
octokit.repos.getCommitActivityStats({
  owner,
  repo
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-the-last-year-of-commit-activity).
