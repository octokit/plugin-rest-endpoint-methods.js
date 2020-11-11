---
name: Get users with access to the protected branch
example: octokit.repos.getUsersWithAccessToProtectedBranch({ owner, repo, branch })
route: GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
scope: repos
type: API method
---

# Get users with access to the protected branch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.

```js
octokit.repos.getUsersWithAccessToProtectedBranch({
  owner,
  repo,
  branch
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
<tr><td>branch</td><td>yes</td><td>

branch+ parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-users-with-access-to-the-protected-branch).
