---
name: Update a pull request review
example: octokit.pulls.updateReview({ owner, repo, pull_number, review_id, body })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
scope: pulls
type: API method
---

# Update a pull request review

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

</td></tr>
<tr><td>body</td><td>yes</td><td>

The body text of the pull request review.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#update-a-pull-request-review).
