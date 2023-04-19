---
name: List repository security advisories
example: octokit.rest.securityAdvisories.listRepositoryAdvisories({ owner, repo })
route: GET /repos/{owner}/{repo}/security-advisories
scope: securityAdvisories
type: API method
---

# List repository security advisories

Lists security advisories in a repository.
You must authenticate using an access token with the `repo` scope or `repository_advisories:read` permission
in order to get published security advisories in a private repository, or any unpublished security advisories that you have access to.

You can access unpublished security advisories from a repository if you are a security manager or administrator of that repository, or if you are a collaborator on any security advisory.

```js
octokit.rest.securityAdvisories.listRepositoryAdvisories({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by.

</td></tr>
<tr><td>before</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.

</td></tr>
<tr><td>after</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Number of advisories to return per page.

</td></tr>
<tr><td>state</td><td>no</td><td>

Filter by state of the repository advisories. Only advisories of this state will be returned.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/security-advisories/repository-advisories#list-repository-security-advisories).
