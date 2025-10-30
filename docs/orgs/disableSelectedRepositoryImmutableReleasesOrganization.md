---
name: Disable a selected repository for immutable releases in an organization
example: octokit.rest.orgs.disableSelectedRepositoryImmutableReleasesOrganization({ org, repository_id })
route: DELETE /orgs/{org}/settings/immutable-releases/repositories/{repository_id}
scope: orgs
type: API method
---

# Disable a selected repository for immutable releases in an organization

Removes a repository from the list of selected repositories that are enforced for immutable releases in an organization. To use this endpoint, the organization immutable releases policy for `enforced_repositories` must be configured to `selected`.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.disableSelectedRepositoryImmutableReleasesOrganization({
  org,
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
<tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#disable-a-selected-repository-for-immutable-releases-in-an-organization).
