---
name: List repository access to a self-hosted runner group in an organization
example: octokit.actions.listRepoAccessToSelfHostedRunnerGroupInOrg({ org, runner_group_id })
route: GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories
scope: actions
type: API method
---

# List repository access to a self-hosted runner group in an organization

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Lists the repositories with access to a self-hosted runner group configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.listRepoAccessToSelfHostedRunnerGroupInOrg({
  org,
  runner_group_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#list-repository-access-to-a-self-hosted-runner-group-in-an-organization).
