---
name: List tag protection states for a repository
example: octokit.rest.repos.listTagProtection({ owner, repo })
route: GET /repos/{owner}/{repo}/tags/protection
scope: repos
type: API method
---

# List tag protection states for a repository

This returns the tag protection states of a repository.

This information is only available to repository administrators.

```js
octokit.rest.repos.listTagProtection({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-tag-protection-state-of-a-repository).
