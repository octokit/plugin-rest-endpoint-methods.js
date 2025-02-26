---
name: Delete a CodeQL database
example: octokit.rest.codeScanning.deleteCodeqlDatabase({ owner, repo, language })
route: DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}
scope: codeScanning
type: API method
---

# Delete a CodeQL database

Deletes a CodeQL database for a language in a repository.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.deleteCodeqlDatabase({
  owner,
  repo,
  language,
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
<tr><td>language</td><td>yes</td><td>

The language of the CodeQL database.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#delete-a-codeql-database).
