---
name: Get repository clones
example: octokit.repos.getClones({ owner, repo })
route: GET /repos/{owner}/{repo}/traffic/clones
scope: repos
type: API method
---

# Get repository clones

Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

```js
octokit.repos.getClones({
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
<tr><td>per</td><td>no</td><td>

Must be one of: `day`, `week`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-repository-clones).
