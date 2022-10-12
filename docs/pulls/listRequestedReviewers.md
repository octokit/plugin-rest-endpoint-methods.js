---
name: Get all requested reviewers for a pull request
example: octokit.rest.pulls.listRequestedReviewers({ owner, repo, pull_number })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
scope: pulls
type: API method
---

# Get all requested reviewers for a pull request

Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/enterprise-cloud@latest//rest/pulls/reviews#list-reviews-for-a-pull-request) operation.

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request).
