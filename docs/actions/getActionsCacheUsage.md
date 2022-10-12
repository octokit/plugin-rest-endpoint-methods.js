---
name: Get GitHub Actions cache usage for a repository
example: octokit.rest.actions.getActionsCacheUsage({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/cache/usage
scope: actions
type: API method
---

# Get GitHub Actions cache usage for a repository

Gets GitHub Actions cache usage for a repository.
The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.

```js
octokit.rest.actions.getActionsCacheUsage({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/actions#get-github-actions-cache-usage-for-a-repository).
