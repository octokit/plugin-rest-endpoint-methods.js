---
name: Check if permissions defined by a devcontainer have been accepted by the authenticated user
example: octokit.rest.codespaces.checkPermissionsForDevcontainer({ owner, repo, ref, devcontainer_path })
route: GET /repos/{owner}/{repo}/codespaces/permissions_check
scope: codespaces
type: API method
---

# Check if permissions defined by a devcontainer have been accepted by the authenticated user

Checks whether the permissions defined by a given devcontainer configuration have been accepted by the authenticated user.

OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```js
octokit.rest.codespaces.checkPermissionsForDevcontainer({
  owner,
  repo,
  ref,
  devcontainer_path,
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
<tr><td>ref</td><td>yes</td><td>

The git reference that points to the location of the devcontainer configuration to use for the permission check. The value of `ref` will typically be a branch name (`heads/BRANCH_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.

</td></tr>
<tr><td>devcontainer_path</td><td>yes</td><td>

Path to the devcontainer.json configuration to use for the permission check.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/codespaces#check-if-permissions-defined-by-a-devcontainer-have-been-accepted-by-the-authenticated-user).
