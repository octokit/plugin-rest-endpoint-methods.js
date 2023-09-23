---
name: Check if a repository is starred by the authenticated user
example: octokit.rest.activity.checkRepoIsStarredByAuthenticatedUser({ owner, repo })
route: GET /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Check if a repository is starred by the authenticated user

Whether the authenticated user has starred the repository.

```js
octokit.rest.activity.checkRepoIsStarredByAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/activity/starring#check-if-a-repository-is-starred-by-the-authenticated-user).
