---
name: Add user access restrictions
example: octokit.rest.repos.addUserAccessRestrictions({ owner, repo, branch, users })
route: POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
scope: repos
type: API method
---

# Add user access restrictions

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |

```js
octokit.rest.repos.addUserAccessRestrictions({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>branch</td><td>yes</td><td>

The name of the branch.

</td></tr>
<tr><td>users</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#add-user-access-restrictions).
