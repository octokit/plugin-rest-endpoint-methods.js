---
name: Unstar a repository for the authenticated user
example: octokit.activity.unstarRepo({ owner, repo })
route: DELETE /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Unstar a repository for the authenticated user

**Deprecated:** This method has been renamed to activity.unstarRepoForAuthenticatedUser

```js
octokit.activity.unstarRepo({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/starring/#unstar-a-repository-for-the-authenticated-user).
