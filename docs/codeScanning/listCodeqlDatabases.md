---
name: List CodeQL databases for a repository
example: octokit.rest.codeScanning.listCodeqlDatabases({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/codeql/databases
scope: codeScanning
type: API method
---

# List CodeQL databases for a repository

Lists the CodeQL databases that are available in a repository.

For private repositories, you must use an access token with the `security_events` scope.
For public repositories, you can use tokens with the `security_events` or `public_repo` scope.
GitHub Apps must have the `contents` read permission to use this endpoint.

```js
octokit.rest.codeScanning.listCodeqlDatabases({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#list-codeql-databases-for-a-repository).
