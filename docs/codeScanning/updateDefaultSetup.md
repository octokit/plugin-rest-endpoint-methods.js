---
name: Update a code scanning default setup configuration
example: octokit.rest.codeScanning.updateDefaultSetup({ owner, repo })
route: PATCH /repos/{owner}/{repo}/code-scanning/default-setup
scope: codeScanning
type: API method
---

# Update a code scanning default setup configuration

Updates a code scanning default setup configuration.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.updateDefaultSetup({
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
<tr><td>state</td><td>no</td><td>

The desired state of code scanning default setup.

</td></tr>
<tr><td>query_suite</td><td>no</td><td>

CodeQL query suite to be used.

</td></tr>
<tr><td>languages</td><td>no</td><td>

CodeQL languages to be analyzed.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#update-a-code-scanning-default-setup-configuration).
