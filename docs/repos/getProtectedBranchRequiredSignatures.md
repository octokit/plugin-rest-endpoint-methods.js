---
name: Get required signatures of protected branch
example: octokit.repos.getProtectedBranchRequiredSignatures({ owner, repo, branch })
route: GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
scope: repos
type: API method
---

# Get required signatures of protected branch

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.

```js
octokit.repos.getProtectedBranchRequiredSignatures({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/branches/#get-required-signatures-of-protected-branch).
