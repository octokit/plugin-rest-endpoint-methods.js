---
name: Get a self-hosted runner for an organization
example: octokit.actions.getSelfHostedRunnerForOrg({ org, runner_id })
route: GET /orgs/{org}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Get a self-hosted runner for an organization

**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.getSelfHostedRunnerForOrg({
  org,
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
<tr><td>runner_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#get-a-self-hosted-runner-for-an-organization).
