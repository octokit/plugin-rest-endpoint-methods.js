---
name: Get the number of additions and deletions per week
example: octokit.repos.getCodeFrequencyStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/code_frequency
scope: repos
type: API method
---

# Get the number of additions and deletions per week

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

```js
octokit.repos.getCodeFrequencyStats({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/statistics/#get-the-number-of-additions-and-deletions-per-week).
