---
name: Upload an analysis as SARIF data
example: octokit.rest.codeScanning.uploadSarif({ owner, repo, commit_sha, ref, sarif })
route: POST /repos/{owner}/{repo}/code-scanning/sarifs
scope: codeScanning
type: API method
---

# Upload an analysis as SARIF data

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint for private repositories. You can also use tokens with the `public_repo` scope for public repositories only. GitHub Apps must have the `security_events` write permission to use this endpoint.

There are two places where you can upload code scanning results.

- If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
- If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."

You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:

```
gzip -c analysis-data.sarif | base64 -w0
```

<br>
SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable.
To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries.

| **SARIF data**                   | **Maximum values** | **Additional limits**                                                            |
| -------------------------------- | :----------------: | -------------------------------------------------------------------------------- |
| Runs per file                    |         20         |                                                                                  |
| Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            |
| Rules per run                    |       25,000       |                                                                                  |
| Tool extensions per run          |        100         |                                                                                  |
| Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |
| Location per result              |       1,000        | Only 100 locations will be included.                                             |
| Tags per rule                    |         20         | Only 10 tags will be included.                                                   |

The `202 Accepted` response includes an `id` value.
You can use this ID to check the status of the upload by using it in the `/sarifs/{sarif_id}` endpoint.
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit to which the analysis you are uploading relates.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The full Git reference, formatted as `refs/heads/<branch name>`,
`refs/pull/<number>/merge`, or `refs/pull/<number>/head`.

</td></tr>
<tr><td>sarif</td><td>yes</td><td>

A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning)."

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
<tr><td>validate</td><td>no</td><td>

Whether the SARIF file will be validated according to the code scanning specifications.
This parameter is intended to help integrators ensure that the uploaded SARIF files are correctly rendered by code scanning.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/code-scanning#upload-an-analysis-as-sarif-data).
