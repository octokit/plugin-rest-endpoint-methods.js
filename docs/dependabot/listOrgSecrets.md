---
name: List organization secrets
example: octokit.rest.dependabot.listOrgSecrets({ org })
route: GET /orgs/{org}/dependabot/secrets
scope: dependabot
type: API method
---

# List organization secrets

Lists all secrets available in an organization without revealing their
encrypted values.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.dependabot.listOrgSecrets({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/secrets#list-organization-secrets).
