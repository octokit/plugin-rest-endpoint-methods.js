---
name: Create a tag protection state for a repository
example: octokit.rest.repos.createTagProtection({ owner, repo, pattern })
route: POST /repos/{owner}/{repo}/tags/protection
scope: repos
type: API method
---

# Create a tag protection state for a repository

This creates a tag protection state for a repository.
This endpoint is only available to repository administrators.

```js
octokit.rest.repos.createTagProtection({
  owner,
  repo,
  pattern,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>pattern</td><td>yes</td><td>

An optional glob pattern to match against when enforcing tag protection.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#create-tag-protection-state-for-a-repository).
