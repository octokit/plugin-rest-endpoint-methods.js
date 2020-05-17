---
name: Views
example: octokit.repos.getViews({ owner, repo })
route: GET /repos/{owner}/{repo}/traffic/views
scope: repos
type: API method
---

# Views

Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.

```js
octokit.repos.getViews({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/traffic/#views).
