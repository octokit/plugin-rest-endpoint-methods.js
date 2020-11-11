---
name: Delete a pending review for a pull request
example: octokit.pulls.deletePendingReview({ owner, repo, pull_number, review_id })
route: DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}
scope: pulls
type: API method
---

# Delete a pending review for a pull request

```js
octokit.pulls.deletePendingReview({
  owner,
  repo,
  pull_number,
  review_id
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request).
