---
name: Dismiss a review for a pull request
example: octokit.rest.pulls.dismissReview({ owner, repo, pull_number, review_id, message })
route: PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals
scope: pulls
type: API method
---

# Dismiss a review for a pull request

**Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.

```js
octokit.rest.pulls.dismissReview({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>review_id</td><td>yes</td><td>

The unique identifier of the review.

</td></tr>
<tr><td>message</td><td>yes</td><td>

The message for the pull request review dismissal

</td></tr>
<tr><td>event</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#dismiss-a-review-for-a-pull-request).
