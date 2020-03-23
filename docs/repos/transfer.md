# Transfer a repository

A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).

```js
octokit.repos.transfer({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>new_owner</td><td>no</td><td>

**Required:** The username or organization name the repository will be transferred to.

</td></tr>
<tr><td>team_ids</td><td>no</td><td>

ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
