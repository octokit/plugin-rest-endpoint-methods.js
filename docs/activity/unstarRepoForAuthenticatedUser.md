---
name: Unstar a repository for the authenticated user
example: octokit.rest.activity.unstarRepoForAuthenticatedUser({ owner, repo })
route: DELETE /user/starred/{owner}/{repo}
scope: activity
type: API method
---

# Unstar a repository for the authenticated user

```js
octokit.rest.activity.unstarRepoForAuthenticatedUser({
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

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/activity#unstar-a-repository-for-the-authenticated-user).
