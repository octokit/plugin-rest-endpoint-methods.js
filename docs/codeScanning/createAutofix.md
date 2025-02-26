---
name: Create an autofix for a code scanning alert
example: octokit.rest.codeScanning.createAutofix({ owner, repo, alert_number })
route: POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix
scope: codeScanning
type: API method
---

# Create an autofix for a code scanning alert

Creates an autofix for a code scanning alert.

If a new autofix is to be created as a result of this request or is currently being generated, then this endpoint will return a 202 Accepted response.

If an autofix already exists for a given alert, then this endpoint will return a 200 OK response.

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeScanning.createAutofix({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-scanning/code-scanning#create-an-autofix-for-a-code-scanning-alert).
