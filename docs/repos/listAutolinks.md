---
name: List all autolinks of a repository
example: octokit.rest.repos.listAutolinks({ owner, repo })
route: GET /repos/{owner}/{repo}/autolinks
scope: repos
type: API method
---

# List all autolinks of a repository

This returns a list of autolinks configured for the given repository.

Information about autolinks are only available to repository administrators.

```js
octokit.rest.repos.listAutolinks({
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
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/repos#list-autolinks).
