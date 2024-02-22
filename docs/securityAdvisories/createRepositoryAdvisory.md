---
name: Create a repository security advisory
example: octokit.rest.securityAdvisories.createRepositoryAdvisory({ owner, repo, summary, description, vulnerabilities, vulnerabilities[].package, vulnerabilities[].package.ecosystem, credits[].login, credits[].type })
route: POST /repos/{owner}/{repo}/security-advisories
scope: securityAdvisories
type: API method
---

# Create a repository security advisory

Creates a new repository security advisory.

In order to create a draft repository security advisory, the authenticated user must be a security manager or administrator of that repository.

OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```js
octokit.rest.securityAdvisories.createRepositoryAdvisory({
        owner,
repo,
summary,
description,
vulnerabilities,
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
<tr><td>summary</td><td>yes</td><td>

A short summary of the advisory.

</td></tr>
<tr><td>description</td><td>yes</td><td>

A detailed description of what the advisory impacts.

</td></tr>
<tr><td>cve_id</td><td>no</td><td>

The Common Vulnerabilities and Exposures (CVE) ID.

</td></tr>
<tr><td>vulnerabilities</td><td>yes</td><td>

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
<tr><td>start_private_fork</td><td>no</td><td>

Whether to create a temporary private fork of the repository to collaborate on a fix.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#create-a-repository-security-advisory).
