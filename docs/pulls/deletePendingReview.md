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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>pull_number</td><td>yes</td><td>

pull_number parameter

</td></tr>
<tr><td>review_id</td><td>yes</td><td>

review_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/reviews/#delete-a-pending-review).
