---
name: Create a remove token for a repository
example: octokit.actions.createRemoveTokenForRepo({ owner, repo })
route: POST /repos/{owner}/{repo}/actions/runners/remove-token
scope: actions
type: API method
---

# Create a remove token for a repository

Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour. You must authenticate using an access token with the `repo` scope to use this endpoint.

Remove your self-hosted runner from a repository, replacing TOKEN with the remove token provided by this endpoint.

```js
octokit.actions.createRemoveTokenForRepo({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#create-a-remove-token-for-a-repository).
