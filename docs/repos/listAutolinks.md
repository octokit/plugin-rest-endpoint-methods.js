---
name: Get all autolinks of a repository
example: octokit.rest.repos.listAutolinks({ owner, repo })
route: GET /repos/{owner}/{repo}/autolinks
scope: repos
type: API method
---

# Get all autolinks of a repository

Gets all autolinks that are configured for a repository.

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/autolinks#get-all-autolinks-of-a-repository).
