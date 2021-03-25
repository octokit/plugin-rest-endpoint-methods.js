---
name: Check if a repository is starred by the authenticated user
example: octokit.rest.activity.checkRepoIsStarredByAuthenticatedUser({ owner, repo })
route: GET /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Check if a repository is starred by the authenticated user

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user).
