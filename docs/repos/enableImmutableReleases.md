---
name: Enable immutable releases
example: octokit.rest.repos.enableImmutableReleases({ owner, repo })
route: PUT /repos/{owner}/{repo}/immutable-releases
scope: repos
type: API method
---

# Enable immutable releases

Enables immutable releases for a repository. The authenticated user must have admin access to the repository.

```js
octokit.rest.repos.enableImmutableReleases({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#enable-immutable-releases).
