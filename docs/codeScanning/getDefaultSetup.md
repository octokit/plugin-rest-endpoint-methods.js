---
name: Get a code scanning default setup configuration
example: octokit.rest.codeScanning.getDefaultSetup({ owner, repo })
route: GET /repos/{owner}/{repo}/code-scanning/default-setup
scope: codeScanning
type: API method
---

# Get a code scanning default setup configuration

Gets a code scanning default setup configuration.
You must use an access token with the `repo` scope to use this endpoint with private repos or the `public_repo`
scope for public repos. GitHub Apps must have the `repo` write permission to use this endpoint.

```js
octokit.rest.codeScanning.getDefaultSetup({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-default-setup-configuration).
