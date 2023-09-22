---
name: Delete a milestone
example: octokit.rest.issues.deleteMilestone({ owner, repo, milestone_number })
route: DELETE /repos/{owner}/{repo}/milestones/{milestone_number}
scope: issues
type: API method
---

# Delete a milestone

Deletes a milestone using the given milestone number.

```js
octokit.rest.issues.deleteMilestone({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>milestone_number</td><td>yes</td><td>

The number that identifies the milestone.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/milestones#delete-a-milestone).
