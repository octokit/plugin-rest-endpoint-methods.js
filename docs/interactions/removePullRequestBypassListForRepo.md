---

name: Remove users from the pull request creation cap bypass list for a repository
example: octokit.rest.interactions.removePullRequestBypassListForRepo({ owner, repo, users })
route: DELETE /repos/{owner}/{repo}/interaction-limits/pulls/bypass-list
scope: interactions
type: API method
---

# Remove users from the pull request creation cap bypass list for a repository

Removes users from the pull request creation cap bypass list for a repository.
Removed users will be subject to any configured pull request creation cap.

Only users with maintainer permissions can modify the bypass list.
You can remove a maximum of 100 users per request.

```js
octokit.rest.interactions.removePullRequestBypassListForRepo({
  owner,
  repo,
  users,
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
<tr><td>users</td><td>yes</td><td>

A list of user logins to add or remove from the bypass list.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/repos#remove-users-from-the-pull-request-creation-cap-bypass-list-for-a-repository).
