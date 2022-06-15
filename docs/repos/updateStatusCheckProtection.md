---
name: Update status check protection
example: octokit.rest.repos.updateStatusCheckProtection({ owner, repo, branch, checks[].context })
route: PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
scope: repos
type: API method
---

# Update status check protection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.

```js
octokit.rest.repos.updateStatusCheckProtection({
        owner,
repo,
branch,
checks[].context
      })
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
<tr><td>branch</td><td>yes</td><td>

The name of the branch.

</td></tr>
<tr><td>strict</td><td>no</td><td>

Require branches to be up to date before merging.

</td></tr>
<tr><td>contexts</td><td>no</td><td>

**Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.

</td></tr>
<tr><td>checks</td><td>no</td><td>

The list of status checks to require in order to merge into this branch.

</td></tr>
<tr><td>checks[].context</td><td>yes</td><td>

The name of the required check

</td></tr>
<tr><td>checks[].app_id</td><td>no</td><td>

The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-status-check-protection).
