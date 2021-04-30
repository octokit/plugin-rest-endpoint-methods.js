---
name: Upload an analysis as SARIF data
example: octokit.rest.codeScanning.uploadSarif({ owner, repo, commit_sha, ref, sarif })
route: POST /repos/{owner}/{repo}/code-scanning/sarifs
scope: codeScanning
type: API method
---

# Upload an analysis as SARIF data

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.

- If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)."
- If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.

The `202 Accepted`, response includes an `id` value.
You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."

```js
octokit.rest.codeScanning.uploadSarif({
  owner,
  repo,
  commit_sha,
  ref,
  sarif,
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
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit to which the analysis you are uploading relates.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The full Git reference, formatted as `refs/heads/<branch name>`,
`refs/pull/<number>/merge`, or `refs/pull/<number>/head`.

</td></tr>
<tr><td>sarif</td><td>yes</td><td>

A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/github/finding-security-vulnerabilities-and-errors-in-your-code/sarif-support-for-code-scanning)."

</td></tr>
<tr><td>checkout_uri</td><td>no</td><td>

The base directory used in the analysis, as it appears in the SARIF file.
This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.

</td></tr>
<tr><td>started_at</td><td>no</td><td>

The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>tool_name</td><td>no</td><td>

The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to "API". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#upload-a-sarif-file).
