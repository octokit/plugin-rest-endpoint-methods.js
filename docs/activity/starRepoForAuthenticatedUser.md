---
name: Star a repository for the authenticated user
example: octokit.activity.starRepoForAuthenticatedUser({ owner, repo })
route: PUT /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Star a repository for the authenticated user

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

```js
octokit.activity.starRepoForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/activity/starring/#star-a-repository-for-the-authenticated-user).
