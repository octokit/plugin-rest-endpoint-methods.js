---
name: Set the default repository access level for Dependabot
example: octokit.rest.dependabot.setRepositoryAccessDefaultLevel({ org, default_level })
route: PUT /organizations/{org}/dependabot/repository-access/default-level
scope: dependabot
type: API method
---

# Set the default repository access level for Dependabot

Sets the default level of repository access Dependabot will have while performing an update. Available values are:

- 'public' - Dependabot will only have access to public repositories, unless access is explicitly granted to non-public repositories.
- 'internal' - Dependabot will only have access to public and internal repositories, unless access is explicitly granted to private repositories.

Unauthorized users will not see the existence of this endpoint.

This operation supports both server-to-server and user-to-server access.

```js
octokit.rest.dependabot.setRepositoryAccessDefaultLevel({
  org,
  default_level,
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
<tr><td>default_level</td><td>yes</td><td>

The default repository access level for Dependabot updates.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#set-the-default-repository-access-level-for-dependabot).
