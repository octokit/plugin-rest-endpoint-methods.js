---
name: List self-hosted runners for a repository
example: octokit.rest.actions.listSelfHostedRunnersForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runners
scope: actions
type: API method
---

# List self-hosted runners for a repository

Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.rest.actions.listSelfHostedRunnersForRepo({
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository).
