---
name: Add selected repository to an organization secret
example: octokit.rest.actions.addSelectedRepoToOrgSecret({ org, secret_name, repository_id })
route: PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
scope: actions
type: API method
---

# Add selected repository to an organization secret

Adds a repository to an organization secret when the `visibility` for
repository access is set to `selected`. For more information about setting the visibility, see [Create or
update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).

Authenticated users must have collaborator access to a repository to create, update, or read secrets.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.addSelectedRepoToOrgSecret({
  org,
  secret_name,
  repository_id,
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
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#add-selected-repository-to-an-organization-secret).
