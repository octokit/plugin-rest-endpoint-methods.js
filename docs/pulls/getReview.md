---
name: Get a review for a pull request
example: octokit.pulls.getReview({ owner, repo, pull_number, review_id })
route: GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
scope: pulls
type: API method
---

# Get a review for a pull request

```js
octokit.pulls.getReview({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#get-a-review-for-a-pull-request).
