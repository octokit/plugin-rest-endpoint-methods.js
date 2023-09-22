---
name: List installation requests for the authenticated app
example: octokit.rest.apps.listInstallationRequestsForAuthenticatedApp()
route: GET /app/installation-requests
scope: apps
type: API method
---

# List installation requests for the authenticated app

Lists all the pending installation requests for the authenticated GitHub App.

```js
octokit.rest.apps.listInstallationRequestsForAuthenticatedApp();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/apps#list-installation-requests-for-the-authenticated-app).
