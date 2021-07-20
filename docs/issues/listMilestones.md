---
name: List milestones
example: octokit.rest.issues.listMilestones({ owner, repo })
route: GET /repos/{owner}/{repo}/milestones
scope: issues
type: API method
---

# List milestones

```js
octokit.rest.issues.listMilestones({
  owner,
  repo,
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
<tr><td>state</td><td>no</td><td>

The state of the milestone. Either `open`, `closed`, or `all`.

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Either `due_on` or `completeness`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction of the sort. Either `asc` or `desc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-milestones).
