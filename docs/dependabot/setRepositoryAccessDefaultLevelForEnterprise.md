---

name: Set the default repository access level for Dependabot in an enterprise
example: octokit.rest.dependabot.setRepositoryAccessDefaultLevelForEnterprise({ enterprise, default_level })
route: PUT /enterprises/{enterprise}/dependabot/repository-access/default-level
scope: dependabot
type: API method
---

# Set the default repository access level for Dependabot in an enterprise

Sets the default level of repository access Dependabot will have while performing an update across organizations in the enterprise. Available values are:

- 'public' - Dependabot will only have access to public repositories, unless access is explicitly granted to non-public repositories.
- 'internal' - Dependabot will only have access to public and internal repositories, unless access is explicitly granted to private repositories.

The authenticated user must be an enterprise owner to use this endpoint.

```js
octokit.rest.dependabot.setRepositoryAccessDefaultLevelForEnterprise({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name.

</td></tr>
<tr><td>default_level</td><td>yes</td><td>

The default repository access level for Dependabot updates.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#set-the-default-repository-access-level-for-dependabot-in-an-enterprise).
