---
name: Delete an organization secret
example: octokit.actions.deleteOrgSecret({ org, secret_name })
route: DELETE /orgs/{org}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Delete an organization secret

Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.

```js
octokit.actions.deleteOrgSecret({
  org,
  secret_name
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

</td></tr>
<tr><td>secret_name</td><td>yes</td><td>

secret_name parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#delete-an-organization-secret).
