---
name: Enable Dependabot security updates
example: octokit.rest.repos.enableAutomatedSecurityFixes({ owner, repo })
route: PUT /repos/{owner}/{repo}/automated-security-fixes
scope: repos
type: API method
---

# Enable Dependabot security updates

Enables Dependabot security updates for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#enable-dependabot-security-updates).
