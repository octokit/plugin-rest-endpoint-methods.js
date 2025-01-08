---
name: Get secret scanning scan history for a repository
example: octokit.rest.secretScanning.getScanHistory({ owner, repo })
route: GET /repos/{owner}/{repo}/secret-scanning/scan-history
scope: secretScanning
type: API method
---

# Get secret scanning scan history for a repository

Lists the latest default incremental and backfill scans by type for a repository. Scans from Copilot Secret Scanning are not included.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```js
octokit.rest.secretScanning.getScanHistory({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/secret-scanning#get-secret-scanning-scan-history-for-a-repository).
