---
name: Transfer a repository
example: octokit.rest.repos.transfer({ owner, repo, new_owner })
route: POST /repos/{owner}/{repo}/transfer
scope: repos
type: API method
---

# Transfer a repository

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).

```js
octokit.rest.repos.transfer({
  owner,
  repo,
  new_owner,
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
<tr><td>new_owner</td><td>yes</td><td>

The username or organization name the repository will be transferred to.

</td></tr>
<tr><td>team_ids</td><td>no</td><td>

ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#transfer-a-repository).
