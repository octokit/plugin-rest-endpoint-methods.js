---
name: List self-hosted runners in a group for an organization
example: octokit.actions.listSelfHostedRunnersInGroupForOrg({ org, runner_group_id })
route: GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners
scope: actions
type: API method
---

# List self-hosted runners in a group for an organization

**Warning:** The self-hosted runner group API is currently in public beta and subject to change.

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Lists self-hosted runners that are in a specific organization group.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.listSelfHostedRunnersInGroupForOrg({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#list-self-hosted-runners-in-a-group-for-an-organization).
