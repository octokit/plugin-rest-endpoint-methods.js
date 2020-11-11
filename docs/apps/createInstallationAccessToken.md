---
name: Create an installation access token for an app
example: octokit.apps.createInstallationAccessToken({ installation_id })
route: POST /app/installations/{installation_id}/access_tokens
scope: apps
type: API method
---

# Create an installation access token for an app

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.createInstallationAccessToken({
  installation_id
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
    <tr><td>installation_id</td><td>yes</td><td>

installation_id parameter

</td></tr>
<tr><td>repositories</td><td>no</td><td>

List of repository names that the token should have access to

</td></tr>
<tr><td>repository_ids</td><td>no</td><td>

List of repository IDs that the token should have access to

</td></tr>
<tr><td>permissions</td><td>no</td><td>

</td></tr>
<tr><td>permissions.contents</td><td>no</td><td>

</td></tr>
<tr><td>permissions.issues</td><td>no</td><td>

</td></tr>
<tr><td>permissions.deployments</td><td>no</td><td>

</td></tr>
<tr><td>permissions.single_file</td><td>no</td><td>

</td></tr>
<tr><td>permissions.def_not_a_repo</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps/#create-an-installation-access-token-for-an-app).
