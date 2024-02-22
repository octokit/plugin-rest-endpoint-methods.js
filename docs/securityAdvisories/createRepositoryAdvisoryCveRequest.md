---
name: Request a CVE for a repository security advisory
example: octokit.rest.securityAdvisories.createRepositoryAdvisoryCveRequest({ owner, repo, ghsa_id })
route: POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve
scope: securityAdvisories
type: API method
---

# Request a CVE for a repository security advisory

If you want a CVE identification number for the security vulnerability in your project, and don't already have one, you can request a CVE identification number from GitHub. For more information see "[Requesting a CVE identification number](https://docs.github.com/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#requesting-a-cve-identification-number-optional)."

You may request a CVE for public repositories, but cannot do so for private repositories.

In order to request a CVE for a repository security advisory, the authenticated user must be a security manager or administrator of that repository.

OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```js
octokit.rest.securityAdvisories.createRepositoryAdvisoryCveRequest({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#request-a-cve-for-a-repository-security-advisory).
