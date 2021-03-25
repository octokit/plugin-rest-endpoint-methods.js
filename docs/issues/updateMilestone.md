---
name: Update a milestone
example: octokit.rest.issues.updateMilestone({ owner, repo, milestone_number })
route: PATCH /repos/{owner}/{repo}/milestones/{milestone_number}
scope: issues
type: API method
---

# Update a milestone

```js
octokit.rest.issues.updateMilestone({
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
<tr><td>title</td><td>no</td><td>

The title of the milestone.

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the milestone. Either `open` or `closed`.

</td></tr>
<tr><td>description</td><td>no</td><td>

A description of the milestone.

</td></tr>
<tr><td>due_on</td><td>no</td><td>

The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#update-a-milestone).
