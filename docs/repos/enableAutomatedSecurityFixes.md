---
name: Enable automated security fixes
example: octokit.rest.repos.enableAutomatedSecurityFixes({ owner, repo })
route: PUT /repos/{owner}/{repo}/automated-security-fixes
scope: repos
type: API method
---

# Enable automated security fixes

Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".

```js
octokit.rest.repos.enableAutomatedSecurityFixes({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#enable-automated-security-fixes).
