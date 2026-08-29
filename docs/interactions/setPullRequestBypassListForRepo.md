---

name: Add users to the pull request creation cap bypass list for a repository
example: octokit.rest.interactions.setPullRequestBypassListForRepo({ owner, repo, users })
route: PUT /repos/{owner}/{repo}/interaction-limits/pulls/bypass-list
scope: interactions
type: API method
---

# Add users to the pull request creation cap bypass list for a repository

Adds users to the pull request creation cap bypass list for a repository.
Users on this list can create pull requests regardless of any configured
pull request creation cap.

Only users with maintainer permissions can modify the bypass list.
You can add a maximum of 100 users per request.
The bypass list can only hold a maximum of 100 users.

```js
octokit.rest.interactions.setPullRequestBypassListForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/repos#add-users-to-the-pull-request-creation-cap-bypass-list-for-a-repository).
