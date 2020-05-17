---
name: Get a single milestone
example: octokit.issues.getMilestone({ owner, repo, milestone_number })
route: GET /repos/{owner}/{repo}/milestones/{milestone_number}
scope: issues
type: API method
---

# Get a single milestone

```js
octokit.issues.getMilestone({
  owner,
  repo,
  milestone_number,
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
<tr><td>milestone_number</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/milestones/#get-a-single-milestone).
