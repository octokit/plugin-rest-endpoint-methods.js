---
name: Sync a fork branch with the upstream repository
example: octokit.rest.repos.mergeUpstream({ owner, repo, branch })
route: POST /repos/{owner}/{repo}/merge-upstream
scope: repos
type: API method
---

# Sync a fork branch with the upstream repository

**Note:** This endpoint is currently in beta and subject to change.

Sync a branch of a forked repository to keep it up-to-date with the upstream repository.

```js
octokit.rest.repos.mergeUpstream({
  owner,
  repo,
  branch,
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
<tr><td>branch</td><td>yes</td><td>

The name of the branch which should be updated to match upstream.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository).
