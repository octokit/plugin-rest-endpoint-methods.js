---
name: Set selected repositories for an organization secret
example: octokit.rest.actions.setSelectedReposForOrgSecret({ org, secret_name, selected_repository_ids })
route: PUT /orgs/{org}/actions/secrets/{secret_name}/repositories
scope: actions
type: API method
---

# Set selected repositories for an organization secret

Replaces all repositories for an organization secret when the `visibility`
for repository access is set to `selected`. The visibility is set when you [Create
or update an organization secret](https://docs.github.com/rest/actions/secrets#create-or-update-an-organization-secret).

You must authenticate using an access token with the `admin:org` scope to use this endpoint.
If the repository is private, you must use an access token with the `repo` scope.
GitHub Apps must have the `secrets` organization permission to use this endpoint.
Authenticated users must have collaborator access to a repository to create, update, or read secrets.

```js
octokit.rest.actions.setSelectedReposForOrgSecret({
  org,
  secret_name,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Add selected repository to an organization secret](https://docs.github.com/rest/actions/secrets#add-selected-repository-to-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#set-selected-repositories-for-an-organization-secret).
