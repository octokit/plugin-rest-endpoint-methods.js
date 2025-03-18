---
name: Commit an autofix for a code scanning alert
example: octokit.rest.codeScanning.commitAutofix({ owner, repo, alert_number })
route: POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits
scope: codeScanning
type: API method
---

# Commit an autofix for a code scanning alert

Commits an autofix for a code scanning alert.

If an autofix is committed as a result of this request, then this endpoint will return a 201 Created response.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.commitAutofix({
  owner,
  repo,
  alert_number,
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
<tr><td>alert_number</td><td>yes</td><td>

The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.

</td></tr>
<tr><td>target_ref</td><td>no</td><td>

The Git reference of target branch for the commit. Branch needs to already exist. For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.

</td></tr>
<tr><td>message</td><td>no</td><td>

Commit message to be used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#commit-an-autofix-for-a-code-scanning-alert).
