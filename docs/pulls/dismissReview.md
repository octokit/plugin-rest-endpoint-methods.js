---
name: Dismiss a pull request review
example: octokit.pulls.dismissReview({ owner, repo, pull_number, review_id, message })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals
scope: pulls
type: API method
---

# Dismiss a pull request review

**Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

```js
octokit.pulls.dismissReview({
  owner,
  repo,
  pull_number,
  review_id,
  message,
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
<tr><td>message</td><td>yes</td><td>

The message for the pull request review dismissal

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#dismiss-a-pull-request-review).
