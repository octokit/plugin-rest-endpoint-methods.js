# Delete a review request

```js
octokit.pulls.deleteReviewRequest({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

pull_number parameter

</td></tr>
<tr><td>reviewers</td><td>no</td><td>

An array of user `login`s that will be removed.

</td></tr>
<tr><td>team_reviewers</td><td>no</td><td>

An array of team `slug`s that will be removed.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/review_requests/#delete-a-review-request).
