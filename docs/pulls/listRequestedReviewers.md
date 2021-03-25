---
name: List requested reviewers for a pull request
example: octokit.rest.pulls.listRequestedReviewers({ owner, repo, pull_number })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
scope: pulls
type: API method
---

# List requested reviewers for a pull request

```js
octokit.rest.pulls.listRequestedReviewers({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#list-requested-reviewers-for-a-pull-request).
