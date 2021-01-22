---
name: Delete commit signature protection
example: octokit.repos.deleteCommitSignatureProtection({ owner, repo, branch })
route: DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
scope: repos
type: API method
---

# Delete commit signature protection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

```js
octokit.repos.deleteCommitSignatureProtection({
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

The name of the branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-commit-signature-protection).
