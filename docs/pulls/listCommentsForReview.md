---
name: List comments for a pull request review
example: octokit.pulls.listCommentsForReview({ owner, repo, pull_number, review_id })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments
scope: pulls
type: API method
---

# List comments for a pull request review

List comments for a specific pull request review.

```js
octokit.pulls.listCommentsForReview({
  owner,
  repo,
  pull_number,
  review_id,
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
<tr><td>review_id</td><td>yes</td><td>

review_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review).
