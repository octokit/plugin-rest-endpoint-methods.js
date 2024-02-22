---
name: Get a repository security advisory
example: octokit.rest.securityAdvisories.getRepositoryAdvisory({ owner, repo, ghsa_id })
route: GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}
scope: securityAdvisories
type: API method
---

# Get a repository security advisory

Get a repository security advisory using its GitHub Security Advisory (GHSA) identifier.

Anyone can access any published security advisory on a public repository.

The authenticated user can access an unpublished security advisory from a repository if they are a security manager or administrator of that repository, or if they are a
collaborator on the security advisory.

OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:read` scope to to get a published security advisory in a private repository, or any unpublished security advisory that the authenticated user has access to.

```js
octokit.rest.securityAdvisories.getRepositoryAdvisory({
  owner,
  repo,
  ghsa_id,
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
<tr><td>ghsa_id</td><td>yes</td><td>

The GHSA (GitHub Security Advisory) identifier of the advisory.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#get-a-repository-security-advisory).
