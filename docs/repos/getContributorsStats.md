---
name: Get contributors list with additions, deletions, and commit counts
example: octokit.repos.getContributorsStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/contributors
scope: repos
type: API method
---

# Get contributors list with additions, deletions, and commit counts

- `total` - The Total number of commits authored by the contributor.

Weekly Hash (`weeks` array):

- `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
- `a` - Number of additions
- `d` - Number of deletions
- `c` - Number of commits

```js
octokit.repos.getContributorsStats({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/statistics/#get-contributors-list-with-additions-deletions-and-commit-counts).
