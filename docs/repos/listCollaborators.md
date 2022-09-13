---
name: List repository collaborators
example: octokit.rest.repos.listCollaborators({ owner, repo })
route: GET /repos/{owner}/{repo}/collaborators
scope: repos
type: API method
---

# List repository collaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

```js
octokit.rest.repos.listCollaborators({
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
<tr><td>affiliation</td><td>no</td><td>

Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.

</td></tr>
<tr><td>permission</td><td>no</td><td>

Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/collaborators#list-repository-collaborators).
