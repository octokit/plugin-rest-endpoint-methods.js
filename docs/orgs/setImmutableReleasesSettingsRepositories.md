---
name: Set selected repositories for immutable releases enforcement
example: octokit.rest.orgs.setImmutableReleasesSettingsRepositories({ org, selected_repository_ids })
route: PUT /orgs/{org}/settings/immutable-releases/repositories
scope: orgs
type: API method
---

# Set selected repositories for immutable releases enforcement

Replaces all repositories that have been selected for immutable releases enforcement in an organization. To use this endpoint, the organization immutable releases policy for `enforced_repositories` must be configured to `selected`.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.setImmutableReleasesSettingsRepositories({
  org,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

An array of repository ids for which immutable releases enforcement should be applied. You can only provide a list of repository ids when the `enforced_repositories` is set to `selected`. You can add and remove individual repositories using the [Enable a selected repository for immutable releases in an organization](https://docs.github.com/rest/orgs/orgs#enable-a-selected-repository-for-immutable-releases-in-an-organization) and [Disable a selected repository for immutable releases in an organization](https://docs.github.com/rest/orgs/orgs#disable-a-selected-repository-for-immutable-releases-in-an-organization) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#set-selected-repositories-for-immutable-releases-enforcement).
