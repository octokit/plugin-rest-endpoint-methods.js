---
name: List organization repositories
example: octokit.rest.repos.listForOrg({ org })
route: GET /orgs/{org}/repos
scope: repos
type: API method
---

# List organization repositories

Lists repositories for the specified organization.

```js
octokit.rest.repos.listForOrg({
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

</td></tr>
<tr><td>type</td><td>no</td><td>

Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Note: For GitHub AE, can be one of `all`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`. However, the `internal` value is not yet supported when a GitHub App calls this API with an installation access token.

</td></tr>
<tr><td>sort</td><td>no</td><td>

Can be one of `created`, `updated`, `pushed`, `full_name`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#list-organization-repositories).
