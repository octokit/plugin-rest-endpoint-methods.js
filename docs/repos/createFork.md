---
name: Create a fork
example: octokit.rest.repos.createFork({ owner, repo })
route: POST /repos/{owner}/{repo}/forks
scope: repos
type: API method
---

# Create a fork

Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).

**Note**: Although this endpoint works with GitHub Apps, the GitHub App must be installed on the destination account with access to all repositories and on the source account with access to the source repository.

```js
octokit.rest.repos.createFork({
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
<tr><td>organization</td><td>no</td><td>

Optional parameter to specify the organization name if forking into an organization.

</td></tr>
<tr><td>name</td><td>no</td><td>

When forking from an existing repository, a new name for the fork.

</td></tr>
<tr><td>default_branch_only</td><td>no</td><td>

When forking from an existing repository, fork with only the default branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-a-fork).
