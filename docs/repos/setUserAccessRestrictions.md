---
name: Set user access restrictions
example: octokit.repos.setUserAccessRestrictions({ owner, repo, branch, users })
route: PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
scope: repos
type: API method
---

# Set user access restrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

```js
octokit.repos.setUserAccessRestrictions({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>branch</td><td>yes</td><td>

branch+ parameter

</td></tr>
<tr><td>users</td><td>yes</td><td>

users parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#set-user-access-restrictions).
