---
name: Update a review for a pull request
example: octokit.pulls.updateReview({ owner, repo, pull_number, review_id, body })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
scope: pulls
type: API method
---

# Update a review for a pull request

Update the review summary comment with new text.

```js
octokit.pulls.updateReview({
  owner,
  repo,
  pull_number,
  review_id,
  body,
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
<tr><td>body</td><td>yes</td><td>

The body text of the pull request review.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request).
