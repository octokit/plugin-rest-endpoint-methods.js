---
name: Remove requested reviewers from a pull request
example: octokit.rest.pulls.removeRequestedReviewers({ owner, repo, pull_number, reviewers })
route: DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
scope: pulls
type: API method
---

# Remove requested reviewers from a pull request

Removes review requests from a pull request for a given set of users and/or teams.

```js
octokit.rest.pulls.removeRequestedReviewers({
  owner,
  repo,
  pull_number,
  reviewers,
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
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>reviewers</td><td>yes</td><td>

An array of user `login`s that will be removed.

</td></tr>
<tr><td>team_reviewers</td><td>no</td><td>

An array of team `slug`s that will be removed.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request).
