---
name: List installations for the authenticated app
example: octokit.rest.apps.listInstallations()
route: GET /app/installations
scope: apps
type: API method
---

# List installations for the authenticated app

You must use a [JWT](https://docs.github.com/enterprise-server@3.9/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.

```js
octokit.rest.apps.listInstallations();
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
<tr><td>since</td><td>no</td><td>

Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>outdated</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-server@3.9/rest/apps/apps#list-installations-for-the-authenticated-app).
