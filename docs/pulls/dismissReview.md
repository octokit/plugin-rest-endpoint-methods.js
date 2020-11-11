---
name: Dismiss a review for a pull request
example: octokit.pulls.dismissReview({ owner, repo, pull_number, review_id, message })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals
scope: pulls
type: API method
---

# Dismiss a review for a pull request

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

```js
octokit.pulls.dismissReview({
  owner,
  repo,
  pull_number,
  review_id,
  message
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
<tr><td>message</td><td>yes</td><td>

The message for the pull request review dismissal

</td></tr>
<tr><td>event</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request).
