# Replace user restrictions of protected branch

Protected branches are available in public repositories with GitHub Free, and in public and private repositories with GitHub Pro, GitHub Team, and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

```js
octokit.repos.replaceProtectedBranchUserRestrictions({
  owner,
  repo,
  branch,
  users,
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
<tr><td>branch</td><td>yes</td><td>

branch parameter

</td></tr>
<tr><td>users</td><td>yes</td><td>

users parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/branches/#replace-user-restrictions-of-protected-branch).
