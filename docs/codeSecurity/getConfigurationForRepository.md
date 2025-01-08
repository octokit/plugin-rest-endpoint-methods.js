---
name: Get the code security configuration associated with a repository
example: octokit.rest.codeSecurity.getConfigurationForRepository({ owner, repo })
route: GET /repos/{owner}/{repo}/code-security-configuration
scope: codeSecurity
type: API method
---

# Get the code security configuration associated with a repository

Get the code security configuration that manages a repository's code security settings.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getConfigurationForRepository({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#get-the-code-security-configuration-associated-with-a-repository).
