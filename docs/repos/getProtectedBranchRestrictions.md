---
name: Get restrictions of protected branch
example: octokit.repos.getProtectedBranchRestrictions({ owner, repo, branch })
route: GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions
scope: repos
type: API method
---

# Get restrictions of protected branch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch. {{#note}}

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.

```js
octokit.repos.getProtectedBranchRestrictions({
  owner,
  repo,
  branch,
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/branches/#get-restrictions-of-protected-branch).
