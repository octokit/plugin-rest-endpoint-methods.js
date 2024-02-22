---
name: Delete an organization secret
example: octokit.rest.actions.deleteOrgSecret({ org, secret_name })
route: DELETE /orgs/{org}/actions/secrets/{secret_name}
scope: actions
type: API method
---

# Delete an organization secret

Deletes a secret in an organization using the secret name.

Authenticated users must have collaborator access to a repository to create, update, or read secrets.

OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.deleteOrgSecret({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#delete-an-organization-secret).
