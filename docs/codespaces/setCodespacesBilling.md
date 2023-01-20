---
name: Manage access control for organization codespaces
example: octokit.rest.codespaces.setCodespacesBilling({ org, visibility })
route: PUT /orgs/{org}/codespaces/billing
scope: codespaces
type: API method
---

# Manage access control for organization codespaces

Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces billing permissions for users according to the visibility.
You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.codespaces.setCodespacesBilling({
  org,
  visibility,
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
<tr><td>visibility</td><td>yes</td><td>

Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization.

</td></tr>
<tr><td>selected_usernames</td><td>no</td><td>

The usernames of the organization members who should have access to codespaces in the organization. Required when `visibility` is `selected_members`. The provided list of usernames will replace any existing value.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codespaces#set-codespaces-billing).
