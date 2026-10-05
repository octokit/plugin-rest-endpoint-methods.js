---

name: Lists the repositories Dependabot can access in an enterprise
example: octokit.rest.dependabot.repositoryAccessForEnterprise({ enterprise })
route: GET /enterprises/{enterprise}/dependabot/repository-access
scope: dependabot
type: API method
---

# Lists the repositories Dependabot can access in an enterprise

Lists repositories that enterprise admins have allowed Dependabot to access when updating dependencies across organizations in the enterprise.

The authenticated user must be an enterprise owner to use this endpoint.

```js
octokit.rest.dependabot.repositoryAccessForEnterprise({
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
<tr><td>page</td><td>no</td><td>

The page number of results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Number of results per page.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/repository-access#lists-the-repositories-dependabot-can-access-in-an-enterprise).
