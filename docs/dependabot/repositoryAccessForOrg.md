---
name: Lists the repositories Dependabot can access in an organization
example: octokit.rest.dependabot.repositoryAccessForOrg({ org })
route: GET /organizations/{org}/dependabot/repository-access
scope: dependabot
type: API method
---

# Lists the repositories Dependabot can access in an organization

Lists repositories that organization admins have allowed Dependabot to access when updating dependencies.

> [!NOTE]
> This operation supports both server-to-server and user-to-server access.
> Unauthorized users will not see the existence of this endpoint.

```js
octokit.rest.dependabot.repositoryAccessForOrg({
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
<tr><td>page</td><td>no</td><td>

The page number of results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Number of results per page.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#lists-the-repositories-dependabot-can-access-in-an-organization).
