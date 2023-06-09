---
name: Check if a user is a repository collaborator
example: octokit.rest.repos.checkCollaborator({ owner, repo, username })
route: GET /repos/{owner}/{repo}/collaborators/{username}
scope: repos
type: API method
---

# Check if a user is a repository collaborator

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.

You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
endpoint.

```js
octokit.rest.repos.checkCollaborator({
  owner,
  repo,
  username,
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator).
