---
name: Remove a repository collaborator
example: octokit.rest.repos.removeCollaborator({ owner, repo, username })
route: DELETE /repos/{owner}/{repo}/collaborators/{username}
scope: repos
type: API method
---

# Remove a repository collaborator

Removes a collaborator from a repository.

To use this endpoint, the authenticated user must either be an administrator of the repository or target themselves for removal.

This endpoint also:

- Cancels any outstanding invitations
- Unasigns the user from any issues
- Removes access to organization projects if the user is not an organization member and is not a collaborator on any other organization repositories.
- Unstars the repository
- Updates access permissions to packages

Removing a user as a collaborator has the following effects on forks:

- If the user had access to a fork through their membership to this repository, the user will also be removed from the fork.
- If the user had their own fork of the repository, the fork will be deleted.
- If the user still has read access to the repository, open pull requests by this user from a fork will be denied.

> [!NOTE]
> A user can still have access to the repository through organization permissions like base repository permissions.

Although the API responds immediately, the additional permission updates might take some extra time to complete in the background.

For more information on fork permissions, see "[About permissions and visibility of forks](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)".

```js
octokit.rest.repos.removeCollaborator({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/collaborators/collaborators#remove-a-repository-collaborator).
