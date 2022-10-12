---
name: Get a code scanning analysis for a repository
example: octokit.rest.codeScanning.getAnalysis({ owner, repo, analysis_id })
route: GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
scope: codeScanning
type: API method
---

# Get a code scanning analysis for a repository

Gets a specified code scanning analysis for a repository.
You must use an access token with the `security_events` scope to use this endpoint with private repos,
the `public_repo` scope also grants permission to read security events on public repos only.
GitHub Apps must have the `security_events` read permission to use this endpoint.

The default JSON response contains fields that describe the analysis.
This includes the Git reference and commit SHA to which the analysis relates,
the datetime of the analysis, the name of the code scanning tool,
and the number of alerts.

The `rules_count` field in the default response give the number of rules
that were run in the analysis.
For very old analyses this data is not available,
and `0` is returned in this field.

If you use the Accept header `application/sarif+json`,
the response contains the analysis data that was uploaded.
This is formatted as
[SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

```js
octokit.rest.codeScanning.getAnalysis({
  owner,
  repo,
  analysis_id,
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
<tr><td>analysis_id</td><td>yes</td><td>

The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository).
