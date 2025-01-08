---
name: Get the analysis status of a repository in a CodeQL variant analysis
example: octokit.rest.codeScanning.getVariantAnalysisRepoTask({ owner, repo, codeql_variant_analysis_id, repo_owner, repo_name })
route: GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}
scope: codeScanning
type: API method
---

# Get the analysis status of a repository in a CodeQL variant analysis

Gets the analysis status of a repository in a CodeQL variant analysis.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.getVariantAnalysisRepoTask({
  owner,
  repo,
  codeql_variant_analysis_id,
  repo_owner,
  repo_name,
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

The name of the controller repository.

</td></tr>
<tr><td>codeql_variant_analysis_id</td><td>yes</td><td>

The ID of the variant analysis.

</td></tr>
<tr><td>repo_owner</td><td>yes</td><td>

The account owner of the variant analysis repository. The name is not case sensitive.

</td></tr>
<tr><td>repo_name</td><td>yes</td><td>

The name of the variant analysis repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#get-the-analysis-status-of-a-repository-in-a-codeql-variant-analysis).
