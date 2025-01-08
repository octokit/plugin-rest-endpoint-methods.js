---
name: Rename a branch
example: octokit.rest.repos.renameBranch({ owner, repo, branch, new_name })
route: POST /repos/{owner}/{repo}/branches/{branch}/rename
scope: repos
type: API method
---

# Rename a branch

Renames a branch in a repository.

> [!NOTE]
> Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".

The authenticated user must have push access to the branch. If the branch is the default branch, the authenticated user must also have admin or owner permissions.

In order to rename the default branch, fine-grained access tokens also need the `administration:write` repository permission.

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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>branch</td><td>yes</td><td>

The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).

</td></tr>
<tr><td>new_name</td><td>yes</td><td>

The new name of the branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/branches/branches#rename-a-branch).
