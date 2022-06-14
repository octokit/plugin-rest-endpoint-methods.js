---
name: Get the weekly commit activity
example: octokit.rest.repos.getCodeFrequencyStats({ owner, repo })
route: GET /repos/{owner}/{repo}/stats/code_frequency
scope: repos
type: API method
---

# Get the weekly commit activity

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

```js
octokit.rest.repos.getCodeFrequencyStats({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-the-weekly-commit-activity).
