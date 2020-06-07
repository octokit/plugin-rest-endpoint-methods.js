---
name: Update status check potection
example: octokit.repos.updateProtectedBranchRequiredStatusChecks({ owner, repo, branch })
route: PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
scope: repos
type: API method
---

# Update status check potection

**Deprecated:** This method has been renamed to repos.updateStatusChecksProtection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

```js
octokit.repos.updateProtectedBranchRequiredStatusChecks({
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
<tr><td>strict</td><td>no</td><td>

Require branches to be up to date before merging.

</td></tr>
<tr><td>contexts</td><td>no</td><td>

The list of status checks to require in order to merge into this branch

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/branches/#update-status-check-potection).
