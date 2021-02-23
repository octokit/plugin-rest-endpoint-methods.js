---
name: Check if a pull request has been merged
example: octokit.pulls.checkIfMerged({ owner, repo, pull_number })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/merge
scope: pulls
type: API method
---

# Check if a pull request has been merged

```js
octokit.pulls.checkIfMerged({
  owner,
  repo,
  pull_number,
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
<tr><td>pull_number</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/pulls/#check-if-a-pull-request-has-been-merged).
