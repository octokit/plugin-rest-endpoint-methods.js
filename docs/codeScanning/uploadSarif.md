---
name: Upload a SARIF file
example: octokit.codeScanning.uploadSarif({ owner, repo, commit_sha, ref, sarif, tool_name })
route: POST /repos/{owner}/{repo}/code-scanning/sarifs
scope: codeScanning
type: API method
---

# Upload a SARIF file

Upload a SARIF file containing the results of a code scanning analysis to make the results available in a repository.
For private repos, you must use an access token with the `repo` scope. For public repos, you must use an access token with `public_repo` and `repo:security_events` scopes. GitHub Apps must have the `security_events` write permission to use this endpoint.

```js
octokit.codeScanning.uploadSarif({
  owner,
  repo,
  commit_sha,
  ref,
  sarif,
  tool_name,
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

The commit SHA of the code scanning analysis file.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The full Git reference of the code scanning analysis file, formatted as `refs/heads/<branch name>`.

</td></tr>
<tr><td>sarif</td><td>yes</td><td>

A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string.

</td></tr>
<tr><td>checkout_uri</td><td>no</td><td>

The base directory used in the analysis, as it appears in the SARIF file.
This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.

</td></tr>
<tr><td>started_at</td><td>no</td><td>

The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>tool_name</td><td>yes</td><td>

The name of the tool used to generate the code scanning analysis alert.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/code-scanning/#upload-a-sarif-analysis).
