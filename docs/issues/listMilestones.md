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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

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

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues#list-milestones).
