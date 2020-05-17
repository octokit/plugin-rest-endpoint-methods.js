---
name: List self-hosted runners for a repository
example: octokit.actions.listSelfHostedRunnersForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runners
scope: actions
type: API method
---

# List self-hosted runners for a repository

Lists all self-hosted runners for a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.actions.listSelfHostedRunnersForRepo({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#list-self-hosted-runners-for-a-repository).
