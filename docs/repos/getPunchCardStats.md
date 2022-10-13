---
name: Get the hourly commit count for each day
example: octokit.rest.repos.getPunchCardStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/punch_card
scope: repos
type: API method
---

# Get the hourly commit count for each day

Each array contains the day number, hour number, and number of commits:

- `0-6`: Sunday - Saturday
- `0-23`: Hour of day
- Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.

```js
octokit.rest.repos.getPunchCardStats({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/statistics/repos#get-the-hourly-commit-count-for-each-day).
