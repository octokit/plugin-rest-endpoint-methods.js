---
name: Delete a pending review
example: octokit.pulls.deletePendingReview({ owner, repo, pull_number, review_id })
route: DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
scope: pulls
type: API method
---

# Delete a pending review

```js
octokit.pulls.deletePendingReview({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#delete-a-pending-review).
