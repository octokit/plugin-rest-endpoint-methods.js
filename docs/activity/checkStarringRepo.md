---
name: Check if a repository is starred by the authenticated user
example: octokit.activity.checkStarringRepo({ owner, repo })
route: GET /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Check if a repository is starred by the authenticated user

**Deprecated:** This method has been renamed to activity.checkRepoIsStarredByAuthenticatedUser

```js
octokit.activity.checkStarringRepo({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/starring/#check-if-a-repository-is-starred-by-the-authenticated-user).
