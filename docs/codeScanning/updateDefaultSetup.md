---
name: Update a code scanning default setup configuration
example: octokit.rest.codeScanning.updateDefaultSetup({ owner, repo, state })
route: PATCH /repos/{owner}/{repo}/code-scanning/default-setup
scope: codeScanning
type: API method
---

# Update a code scanning default setup configuration

Updates a code scanning default setup configuration.
You must use an access token with the `repo` scope to use this endpoint with private repos or the `public_repo`
scope for public repos. GitHub Apps must have the `repo` write permission to use this endpoint.

```js
octokit.rest.codeScanning.updateDefaultSetup({
  owner,
  repo,
  state,
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
<tr><td>state</td><td>yes</td><td>

Whether code scanning default setup has been configured or not.

</td></tr>
<tr><td>query_suite</td><td>no</td><td>

CodeQL query suite to be used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning#update-a-code-scanning-default-setup-configuration).
