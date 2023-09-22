---
name: Update a repository security advisory
example: octokit.rest.securityAdvisories.updateRepositoryAdvisory({ owner, repo, ghsa_id, vulnerabilities[].package, vulnerabilities[].package.ecosystem, credits[].login, credits[].type })
route: PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}
scope: securityAdvisories
type: API method
---

# Update a repository security advisory

Update a repository security advisory using its GitHub Security Advisory (GHSA) identifier.
You must authenticate using an access token with the `repo` scope or `repository_advisories:write` permission to use this endpoint.

In order to update any security advisory, you must be a security manager or administrator of that repository,
or a collaborator on the repository security advisory.

```js
octokit.rest.securityAdvisories.updateRepositoryAdvisory({
        owner,
repo,
ghsa_id,
vulnerabilities[].package,
vulnerabilities[].package.ecosystem,
credits[].login,
credits[].type
      })
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
<tr><td>summary</td><td>no</td><td>

A short summary of the advisory.

</td></tr>
<tr><td>description</td><td>no</td><td>

A detailed description of what the advisory impacts.

</td></tr>
<tr><td>cve_id</td><td>no</td><td>

The Common Vulnerabilities and Exposures (CVE) ID.

</td></tr>
<tr><td>vulnerabilities</td><td>no</td><td>

A product affected by the vulnerability detailed in a repository security advisory.

</td></tr>
<tr><td>vulnerabilities[].package</td><td>yes</td><td>

The name of the package affected by the vulnerability.

</td></tr>
<tr><td>vulnerabilities[].package.ecosystem</td><td>yes</td><td>

The package's language or package management ecosystem.

</td></tr>
<tr><td>vulnerabilities[].package.name</td><td>no</td><td>

The unique package name within its ecosystem.

</td></tr>
<tr><td>vulnerabilities[].vulnerable_version_range</td><td>no</td><td>

The range of the package versions affected by the vulnerability.

</td></tr>
<tr><td>vulnerabilities[].patched_versions</td><td>no</td><td>

The package version(s) that resolve the vulnerability.

</td></tr>
<tr><td>vulnerabilities[].vulnerable_functions</td><td>no</td><td>

The functions in the package that are affected.

</td></tr>
<tr><td>cwe_ids</td><td>no</td><td>

A list of Common Weakness Enumeration (CWE) IDs.

</td></tr>
<tr><td>credits</td><td>no</td><td>

A list of users receiving credit for their participation in the security advisory.

</td></tr>
<tr><td>credits[].login</td><td>yes</td><td>

The username of the user credited.

</td></tr>
<tr><td>credits[].type</td><td>yes</td><td>

The type of credit the user is receiving.

</td></tr>
<tr><td>severity</td><td>no</td><td>

The severity of the advisory. You must choose between setting this field or `cvss_vector_string`.

</td></tr>
<tr><td>cvss_vector_string</td><td>no</td><td>

The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or `severity`.

</td></tr>
<tr><td>state</td><td>no</td><td>

The state of the advisory.

</td></tr>
<tr><td>collaborating_users</td><td>no</td><td>

A list of usernames who have been granted write access to the advisory.

</td></tr>
<tr><td>collaborating_teams</td><td>no</td><td>

A list of team slugs which have been granted write access to the advisory.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#update-a-repository-security-advisory).
