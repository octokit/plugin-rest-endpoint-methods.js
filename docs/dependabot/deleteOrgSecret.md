---
name: Delete an organization secret
example: octokit.rest.dependabot.deleteOrgSecret({ org, secret_name })
route: DELETE /orgs/{org}/dependabot/secrets/{secret_name}
scope: dependabot
type: API method
---

# Delete an organization secret

Deletes a secret in an organization using the secret name.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.dependabot.deleteOrgSecret({
  org,
  secret_name,
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
<tr><td>secret_name</td><td>yes</td><td>

The name of the secret.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/secrets#delete-an-organization-secret).
