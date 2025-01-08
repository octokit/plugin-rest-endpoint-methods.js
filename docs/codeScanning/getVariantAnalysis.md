---
name: Get the summary of a CodeQL variant analysis
example: octokit.rest.codeScanning.getVariantAnalysis({ owner, repo, codeql_variant_analysis_id })
route: GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}
scope: codeScanning
type: API method
---

# Get the summary of a CodeQL variant analysis

Gets the summary of a CodeQL variant analysis.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.getVariantAnalysis({
  owner,
  repo,
  codeql_variant_analysis_id,
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
<tr><td>codeql_variant_analysis_id</td><td>yes</td><td>

The unique identifier of the variant analysis.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#get-the-summary-of-a-codeql-variant-analysis).
