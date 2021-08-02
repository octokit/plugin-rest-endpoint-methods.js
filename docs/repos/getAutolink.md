---
name: Get an autolink reference of a repository
example: octokit.rest.repos.getAutolink({ owner, repo, autolink_id })
route: GET /repos/{owner}/{repo}/autolinks/{autolink_id}
scope: repos
type: API method
---

# Get an autolink reference of a repository

This returns a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

```js
octokit.rest.repos.getAutolink({
  owner,
  repo,
  autolink_id,
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
<tr><td>autolink_id</td><td>yes</td><td>

autolink_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/repos#get-autolink).
