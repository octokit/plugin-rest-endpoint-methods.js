---
name: Add team access restrictions
example: octokit.repos.addProtectedBranchTeamRestrictions({ owner, repo, branch, teams })
route: POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
scope: repos
type: API method
---

# Add team access restrictions

**Deprecated:** This method has been renamed to repos.addTeamAccessRestrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

```js
octokit.repos.addProtectedBranchTeamRestrictions({
  owner,
  repo,
  branch,
  teams,
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
<tr><td>branch</td><td>yes</td><td>

</td></tr>
<tr><td>teams</td><td>yes</td><td>

teams parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/branches/#add-team-access-restrictions).
