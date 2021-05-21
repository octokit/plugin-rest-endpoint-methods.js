---
name: Get information about a SARIF upload
example: octokit.rest.codeScanning.getSarif({ owner, repo, sarif_id })
route: GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}
scope: codeScanning
type: API method
---

# Get information about a SARIF upload

Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

```js
octokit.rest.codeScanning.getSarif({
  owner,
  repo,
  sarif_id,
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>sarif_id</td><td>yes</td><td>

The SARIF ID obtained after uploading.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository).
