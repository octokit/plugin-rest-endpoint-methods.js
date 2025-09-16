---
name: Get repositories associated with a code security configuration
example: octokit.rest.codeSecurity.getRepositoriesForConfiguration({ org, configuration_id })
route: GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories
scope: codeSecurity
type: API method
---

# Get repositories associated with a code security configuration

Lists the repositories associated with a code security configuration in an organization.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.getRepositoriesForConfiguration({
  org,
  configuration_id,
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
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>status</td><td>no</td><td>

A comma-separated list of statuses. If specified, only repositories with these attachment statuses will be returned.

Can be: `all`, `attached`, `attaching`, `detached`, `removed`, `enforced`, `failed`, `updating`, `removed_by_enterprise`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#get-repositories-associated-with-a-code-security-configuration).
