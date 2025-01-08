---
name: Create a push protection bypass
example: octokit.rest.secretScanning.createPushProtectionBypass({ owner, repo, reason, placeholder_id })
route: POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses
scope: secretScanning
type: API method
---

# Create a push protection bypass

Creates a bypass for a previously push protected secret.

The authenticated user must be the original author of the committed secret.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.secretScanning.createPushProtectionBypass({
  owner,
  repo,
  reason,
  placeholder_id,
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
<tr><td>reason</td><td>yes</td><td>

The reason for bypassing push protection.

</td></tr>
<tr><td>placeholder_id</td><td>yes</td><td>

The ID of the push protection bypass placeholder. This value is returned on any push protected routes.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/secret-scanning#create-a-push-protection-bypass).
