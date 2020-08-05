---
name: Get a self-hosted runner group for an organization
example: octokit.actions.getSelfHostedRunnerGroupForOrg({ org, runner_group_id })
route: GET /orgs/{org}/actions/runner-groups/{runner_group_id}
scope: actions
type: API method
---

# Get a self-hosted runner group for an organization

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Gets a specific self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.getSelfHostedRunnerGroupForOrg({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#get-a-self-hosted-runner-group-for-an-organization).
