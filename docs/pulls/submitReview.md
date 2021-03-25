---
name: Submit a review for a pull request
example: octokit.rest.pulls.submitReview({ owner, repo, pull_number, review_id, event })
route: POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events
scope: pulls
type: API method
---

# Submit a review for a pull request

```js
octokit.rest.pulls.submitReview({
  owner,
  repo,
  pull_number,
  review_id,
  event,
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
<tr><td>body</td><td>no</td><td>

The body text of the pull request review

</td></tr>
<tr><td>event</td><td>yes</td><td>

The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request).
