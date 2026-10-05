---

name: Update pull request creation cap for a repository
example: octokit.rest.interactions.updatePullRequestCreationCapForRepo({ owner, repo, enabled })
route: PATCH /repos/{owner}/{repo}/interaction-limits/pulls/creation-cap
scope: interactions
type: API method
---

# Update pull request creation cap for a repository

Updates the pull request creation cap for a repository. The cap limits the number
of open pull requests a user can have at one time.

Only users with admin access to the repository can configure the cap.

```js
octokit.rest.interactions.updatePullRequestCreationCapForRepo({
  owner,
  repo,
  enabled,
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
<tr><td>enabled</td><td>yes</td><td>

Whether the pull request creation cap is enabled

</td></tr>
<tr><td>max_open_pull_requests</td><td>no</td><td>

The maximum number of open pull requests a user can have at one time

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/repos#update-pull-request-creation-cap-for-a-repository).
