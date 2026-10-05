---

name: Updates Dependabot's repository access list for an enterprise
example: octokit.rest.dependabot.updateRepositoryAccessForEnterprise({ enterprise })
route: PATCH /enterprises/{enterprise}/dependabot/repository-access
scope: dependabot
type: API method
---

# Updates Dependabot's repository access list for an enterprise

Updates repositories according to the list of repositories that enterprise admins have given Dependabot access to when they've updated dependencies across organizations in the enterprise.

The authenticated user must be an enterprise owner to use this endpoint.

**Example request body:**

```json
{
  "repository_ids_to_add": [123, 456],
  "repository_ids_to_remove": [789]
}
```

```js
octokit.rest.dependabot.updateRepositoryAccessForEnterprise({
  enterprise,
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
<tr><td>repository_ids_to_add</td><td>no</td><td>

List of repository IDs to add.

</td></tr>
<tr><td>repository_ids_to_remove</td><td>no</td><td>

List of repository IDs to remove.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#updates-dependabots-repository-access-list-for-an-enterprise).
