---

name: Get pull request creation cap for a repository
example: octokit.rest.interactions.getPullRequestCreationCapForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/interaction-limits/pulls/creation-cap
scope: interactions
type: API method
---

# Get pull request creation cap for a repository

Gets the pull request creation cap configuration for a repository.
The cap limits the number of open pull requests a user can have at one time.

Only users with admin access to the repository can view the cap configuration.

```js
octokit.rest.interactions.getPullRequestCreationCapForRepo({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/repos#get-pull-request-creation-cap-for-a-repository).
