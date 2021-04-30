---
name: Unsuspend an app installation
example: octokit.rest.apps.unsuspendInstallation({ installation_id })
route: DELETE /app/installations/{installation_id}/suspended
scope: apps
type: API method
---

# Unsuspend an app installation

Removes a GitHub App installation suspension.

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.unsuspendInstallation({
  installation_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/apps#unsuspend-an-app-installation).
