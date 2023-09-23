---
name: List repository teams
example: octokit.rest.repos.listTeams({ owner, repo })
route: GET /repos/{owner}/{repo}/teams
scope: repos
type: API method
---

# List repository teams

Lists the teams that have access to the specified repository and that are also visible to the authenticated user.

For a public repository, a team is listed only if that team added the public repository explicitly.

Personal access tokens require the following scopes:

- `public_repo` to call this endpoint on a public repository
- `repo` to call this endpoint on a private repository (this scope also includes public repositories)

This endpoint is not compatible with fine-grained personal access tokens.

```js
octokit.rest.repos.listTeams({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#list-repository-teams).
