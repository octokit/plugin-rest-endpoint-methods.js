---
name: Request reviewers for a pull request
example: octokit.pulls.requestReviewers({ owner, repo, pull_number })
route: POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers
scope: pulls
type: API method
---

# Request reviewers for a pull request

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

```js
octokit.pulls.requestReviewers({
  owner,
  repo,
  pull_number,
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
<tr><td>reviewers</td><td>no</td><td>

An array of user `login`s that will be requested.

</td></tr>
<tr><td>team_reviewers</td><td>no</td><td>

An array of team `slug`s that will be requested.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/review_requests/#request-reviewers-for-a-pull-request).
