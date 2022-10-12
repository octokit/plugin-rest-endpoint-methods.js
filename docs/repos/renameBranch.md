---
name: Rename a branch
example: octokit.rest.repos.renameBranch({ owner, repo, branch, new_name })
route: POST /repos/{owner}/{repo}/branches/{branch}/rename
scope: repos
type: API method
---

# Rename a branch

Renames a branch in a repository.

**Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/enterprise-cloud@latest//github/administering-a-repository/renaming-a-branch)".

The permissions required to use this endpoint depends on whether you are renaming the default branch.

To rename a non-default branch:

- Users must have push access.
- GitHub Apps must have the `contents:write` repository permission.

To rename the default branch:

- Users must have admin or owner permissions.
- GitHub Apps must have the `administration:write` repository permission.

```js
octokit.rest.repos.renameBranch({
  owner,
  repo,
  branch,
  new_name,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>branch</td><td>yes</td><td>

The name of the branch.

</td></tr>
<tr><td>new_name</td><td>yes</td><td>

The new name of the branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#rename-a-branch).
