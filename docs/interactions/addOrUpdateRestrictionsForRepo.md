---
name: Add or update interaction restrictions for a repository
example: octokit.interactions.addOrUpdateRestrictionsForRepo({ owner, repo, limit })
route: PUT /repos/{owner}/{repo}/interaction-limits
scope: interactions
type: API method
---

# Add or update interaction restrictions for a repository

Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.

```js
octokit.interactions.addOrUpdateRestrictionsForRepo({
  owner,
  repo,
  limit,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>limit</td><td>yes</td><td>

Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/interactions/repos/#add-or-update-interaction-restrictions-for-a-repository).
