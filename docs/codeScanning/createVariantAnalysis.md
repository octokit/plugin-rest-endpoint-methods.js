---
name: Create a CodeQL variant analysis
example: octokit.rest.codeScanning.createVariantAnalysis({ owner, repo })
route: POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses
scope: codeScanning
type: API method
---

# Create a CodeQL variant analysis

Creates a new CodeQL variant analysis, which will run a CodeQL query against one or more repositories.

Get started by learning more about [running CodeQL queries at scale with Multi-Repository Variant Analysis](https://docs.github.com/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis).

Use the `owner` and `repo` parameters in the URL to specify the controller repository that
will be used for running GitHub Actions workflows and storing the results of the CodeQL variant analysis.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.codeScanning.createVariantAnalysis({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#create-a-codeql-variant-analysis).
