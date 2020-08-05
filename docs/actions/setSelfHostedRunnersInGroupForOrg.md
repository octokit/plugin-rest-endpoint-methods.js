---
name: Set self-hosted runners in a group for an organization
example: octokit.actions.setSelfHostedRunnersInGroupForOrg({ org, runner_group_id, runners })
route: PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners
scope: actions
type: API method
---

# Set self-hosted runners in a group for an organization

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Replaces the list of self-hosted runners that are part of an organization runner group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.setSelfHostedRunnersInGroupForOrg({
  org,
  runner_group_id,
  runners,
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
<tr><td>runners</td><td>yes</td><td>

List of runner IDs to add to the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/sef-hosted-runner-groups/#set-self-hosted-runners-in-a-group-for-an-organization).
