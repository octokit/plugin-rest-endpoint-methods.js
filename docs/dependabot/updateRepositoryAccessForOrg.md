---
name: Updates Dependabot's repository access list for an organization
example: octokit.rest.dependabot.updateRepositoryAccessForOrg({ org })
route: PATCH /organizations/{org}/dependabot/repository-access
scope: dependabot
type: API method
---

# Updates Dependabot's repository access list for an organization

Updates repositories according to the list of repositories that organization admins have given Dependabot access to when they've updated dependencies.

> [!NOTE]
> This operation supports both server-to-server and user-to-server access.
> Unauthorized users will not see the existence of this endpoint.

**Example request body:**

```json
{
  "repository_ids_to_add": [123, 456],
  "repository_ids_to_remove": [789]
}
```

```js
octokit.rest.dependabot.updateRepositoryAccessForOrg({
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
<tr><td>repository_ids_to_add</td><td>no</td><td>

List of repository IDs to add.

</td></tr>
<tr><td>repository_ids_to_remove</td><td>no</td><td>

List of repository IDs to remove.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#updates-dependabots-repository-access-list-for-an-organization).
