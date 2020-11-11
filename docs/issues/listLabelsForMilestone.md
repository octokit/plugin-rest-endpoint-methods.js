---
name: List labels for issues in a milestone
example: octokit.issues.listLabelsForMilestone({ owner, repo, milestone_number })
route: GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels
scope: issues
type: API method
---

# List labels for issues in a milestone

```js
octokit.issues.listLabelsForMilestone({
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

milestone_number parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone).
