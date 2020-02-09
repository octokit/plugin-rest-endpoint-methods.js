# Revoke an installation token

Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create a new installation token](https://developer.github.com/v3/apps/#create-a-new-installation-token)" endpoint.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.

```js
octokit.apps.revokeInstallationToken();
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
    
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
