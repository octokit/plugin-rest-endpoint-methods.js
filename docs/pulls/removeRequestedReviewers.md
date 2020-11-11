---
name: Remove requested reviewers from a pull request
example: octokit.pulls.removeRequestedReviewers({ owner, repo, pull_number })
route: DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
scope: pulls
type: API method
---

# Remove requested reviewers from a pull request

```js
octokit.pulls.removeRequestedReviewers({
  owner,
  repo,
  pull_number
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
<tr><td>reviewers</td><td>no</td><td>

An array of user `login`s that will be removed.

</td></tr>
<tr><td>team_reviewers</td><td>no</td><td>

An array of team `slug`s that will be removed.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request).
