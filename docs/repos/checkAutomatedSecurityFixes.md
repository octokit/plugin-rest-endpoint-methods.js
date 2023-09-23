---
name: Check if automated security fixes are enabled for a repository
example: octokit.rest.repos.checkAutomatedSecurityFixes({ owner, repo })
route: GET /repos/{owner}/{repo}/automated-security-fixes
scope: repos
type: API method
---

# Check if automated security fixes are enabled for a repository

Shows whether automated security fixes are enabled, disabled or paused for a repository. The authenticated user must have admin read access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".

```js
octokit.rest.repos.checkAutomatedSecurityFixes({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#check-if-automated-security-fixes-are-enabled-for-a-repository).
