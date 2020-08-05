---
name: Set repository access for a self-hosted runner group in an organization
example: octokit.actions.setRepoAccessToSelfHostedRunnerGroupInOrg({ org, runner_group_id, selected_repository_ids })
route: PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories
scope: actions
type: API method
---

# Set repository access for a self-hosted runner group in an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.setRepoAccessToSelfHostedRunnerGroupInOrg({
  org,
  runner_group_id,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

List of repository IDs that can access the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#set-repository-access-to-a-self-hosted-runner-group-in-an-organization).
