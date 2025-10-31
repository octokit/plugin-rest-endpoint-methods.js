---
name: Get immutable releases settings for an organization
example: octokit.rest.orgs.getImmutableReleasesSettings({ org })
route: GET /orgs/{org}/settings/immutable-releases
scope: orgs
type: API method
---

# Get immutable releases settings for an organization

Gets the immutable releases policy for repositories in an organization.

OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.orgs.getImmutableReleasesSettings({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/orgs#get-immutable-releases-settings-for-an-organization).
