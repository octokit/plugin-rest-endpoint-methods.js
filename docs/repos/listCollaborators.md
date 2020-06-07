---
name: List repository collaborators
example: octokit.repos.listCollaborators({ owner, repo })
route: GET /repos/{owner}/{repo}/collaborators
scope: repos
type: API method
---

# List repository collaborators

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

```js
octokit.repos.listCollaborators({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>affiliation</td><td>no</td><td>

Filter collaborators returned by their affiliation. Can be one of:  
\* `outside`: All outside collaborators of an organization-owned repository.  
\* `direct`: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.  
\* `all`: All collaborators the authenticated user can see.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/collaborators/#list-repository-collaborators).
