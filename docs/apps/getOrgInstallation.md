---
name: Get an organization installation for the authenticated app
example: octokit.rest.apps.getOrgInstallation({ org })
route: GET /orgs/{org}/installation
scope: apps
type: API method
---

# Get an organization installation for the authenticated app

Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.rest.apps.getOrgInstallation({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-an-organization-installation-for-the-authenticated-app).
