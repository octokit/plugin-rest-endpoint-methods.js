---
name: List CODEOWNERS errors
example: octokit.rest.repos.codeownersErrors({ owner, repo })
route: GET /repos/{owner}/{repo}/codeowners/errors
scope: repos
type: API method
---

# List CODEOWNERS errors

List any syntax errors that are detected in the CODEOWNERS
file.

For more information about the correct CODEOWNERS syntax,
see "[About code owners](https://docs.github.com/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."

```js
octokit.rest.repos.codeownersErrors({
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>ref</td><td>no</td><td>

A branch, tag or commit name used to determine which version of the CODEOWNERS file to use. Default: the repository's default branch (e.g. `main`)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#list-codeowners-errors).
