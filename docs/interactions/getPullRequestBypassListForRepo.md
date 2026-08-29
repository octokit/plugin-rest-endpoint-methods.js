---

name: Get pull request creation cap bypass list for a repository
example: octokit.rest.interactions.getPullRequestBypassListForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/interaction-limits/pulls/bypass-list
scope: interactions
type: API method
---

# Get pull request creation cap bypass list for a repository

Lists the users that are on the pull request creation cap bypass list for a
repository. Users on this list can create pull requests regardless of any
configured pull request creation cap.

Only users with maintainer permissions can view the bypass list.

```js
octokit.rest.interactions.getPullRequestBypassListForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/repos#get-pull-request-creation-cap-bypass-list-for-a-repository).
