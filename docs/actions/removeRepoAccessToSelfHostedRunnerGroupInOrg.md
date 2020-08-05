---
name: Remove repository access to a self-hosted runner group in an organization
example: octokit.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg({ org, runner_group_id, repository_id })
route: DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}
scope: actions
type: API method
---

# Remove repository access to a self-hosted runner group in an organization

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.removeRepoAccessToSelfHostedRunnerGroupInOrg({
  org,
  runner_group_id,
  repository_id,
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
    <tr><td>org</td><td>yes</td><td>

</td></tr>
<tr><td>runner_group_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner group.

</td></tr>
<tr><td>repository_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization).
