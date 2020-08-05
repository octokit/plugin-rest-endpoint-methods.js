---
name: Add a self-hosted runner to a group for an organization
example: octokit.actions.addSelfHostedRunnerToGroupForOrg({ org, runner_group_id, runner_id })
route: PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}
scope: actions
type: API method
---

# Add a self-hosted runner to a group for an organization

**Warning:** The self-hosted runner group API is currently in public beta and subject to change.

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Adds a self-hosted runner to a runner group configured in an organization.

You must authenticate using an access token with the `admin:org`
scope to use this endpoint.

```js
octokit.actions.addSelfHostedRunnerToGroupForOrg({
  org,
  runner_group_id,
  runner_id,
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
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#add-a-self-hosted-runner-to-a-group-for-an-organization).
