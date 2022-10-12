---
name: Get the last year of commit activity
example: octokit.rest.repos.getCommitActivityStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/commit_activity
scope: repos
type: API method
---

# Get the last year of commit activity

Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.

```js
octokit.rest.repos.getCommitActivityStats({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/metrics/statistics#get-the-last-year-of-commit-activity).
