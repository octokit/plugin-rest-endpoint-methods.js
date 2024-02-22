---
name: Get information about a SARIF upload
example: octokit.rest.codeScanning.getSarif({ owner, repo, sarif_id })
route: GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}
scope: codeScanning
type: API method
---

# Get information about a SARIF upload

Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)."
OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>sarif_id</td><td>yes</td><td>

The SARIF ID obtained after uploading.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#get-information-about-a-sarif-upload).
