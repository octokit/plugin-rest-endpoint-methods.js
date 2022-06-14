---
name: Get interaction restrictions for a repository
example: octokit.rest.interactions.getRestrictionsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/interaction-limits
scope: interactions
type: API method
---

# Get interaction restrictions for a repository

Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

```js
octokit.rest.interactions.getRestrictionsForRepo({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository).
