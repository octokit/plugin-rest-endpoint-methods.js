---
name: Set immutable releases settings for an organization
example: octokit.rest.orgs.setImmutableReleasesSettings({ org, enforced_repositories })
route: PUT /orgs/{org}/settings/immutable-releases
scope: orgs
type: API method
---

# Set immutable releases settings for an organization

Sets the immutable releases policy for repositories in an organization.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.setImmutableReleasesSettings({
  org,
  enforced_repositories,
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
<tr><td>enforced_repositories</td><td>yes</td><td>

The policy that controls how immutable releases are enforced in the organization.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

An array of repository ids for which immutable releases enforcement should be applied. You can only provide a list of repository ids when the `enforced_repositories` is set to `selected`. You can add and remove individual repositories using the [Enable a selected repository for immutable releases in an organization](https://docs.github.com/rest/orgs/orgs#enable-a-selected-repository-for-immutable-releases-in-an-organization) and [Disable a selected repository for immutable releases in an organization](https://docs.github.com/rest/orgs/orgs#disable-a-selected-repository-for-immutable-releases-in-an-organization) endpoints.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#set-immutable-releases-settings-for-an-organization).
