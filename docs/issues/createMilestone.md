---
name: Create a milestone
example: octokit.rest.issues.createMilestone({ owner, repo, title })
route: POST /repos/{owner}/{repo}/milestones
scope: issues
type: API method
---

# Create a milestone

```js
octokit.rest.issues.createMilestone({
  owner,
  repo,
  title,
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
<tr><td>title</td><td>yes</td><td>

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#create-a-milestone).
