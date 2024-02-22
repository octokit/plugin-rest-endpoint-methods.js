---
name: Create a temporary private fork
example: octokit.rest.securityAdvisories.createFork({ owner, repo, ghsa_id })
route: POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks
scope: securityAdvisories
type: API method
---

# Create a temporary private fork

Create a temporary private fork to collaborate on fixing a security vulnerability in your repository.

**Note**: Forking a repository happens asynchronously. You may have to wait up to 5 minutes before you can access the fork.

```js
octokit.rest.securityAdvisories.createFork({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#create-a-temporary-private-fork).
