---
name: Get a user installation for the authenticated app
example: octokit.apps.getUserInstallation({ username })
route: GET /users/{username}/installation
scope: apps
type: API method
---

# Get a user installation for the authenticated app

Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getUserInstallation({
  username,
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
    <tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/#get-a-user-installation-for-the-authenticated-app).
