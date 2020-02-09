# Remove team restrictions of protected branch

Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

```js
octokit.repos.removeProtectedBranchTeamRestrictions(owner, repo, branch, teams);
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
<tr><td>branch</td><td>yes</td><td>

branch parameter

</td></tr>
<tr><td>teams</td><td>yes</td><td>

teams parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
