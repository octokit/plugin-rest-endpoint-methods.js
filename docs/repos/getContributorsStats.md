---
name: Get all contributor commit activity
example: octokit.rest.repos.getContributorsStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/contributors
scope: repos
type: API method
---

# Get all contributor commit activity

Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

- `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
- `a` - Number of additions
- `d` - Number of deletions
- `c` - Number of commits

```js
octokit.rest.repos.getContributorsStats({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-all-contributor-commit-activity).
