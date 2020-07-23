---
name: Disable automated security fixes
example: octokit.repos.disableAutomatedSecurityFixes({ owner, repo })
route: DELETE /repos/{owner}/{repo}/automated-security-fixes
scope: repos
type: API method
---

# Disable automated security fixes

Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/en/articles/configuring-automated-security-fixes)".

```js
octokit.repos.disableAutomatedSecurityFixes({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/#disable-automated-security-fixes).
