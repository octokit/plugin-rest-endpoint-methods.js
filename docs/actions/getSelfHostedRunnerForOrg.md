---
name: Get a self-hosted runner for an organization
example: octokit.rest.actions.getSelfHostedRunnerForOrg({ org, runner_id })
route: GET /orgs/{org}/actions/runners/{runner_id}
scope: actions
type: API method
---

# Get a self-hosted runner for an organization

Gets a specific self-hosted runner configured in an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.rest.actions.getSelfHostedRunnerForOrg({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>runner_id</td><td>yes</td><td>

Unique identifier of the self-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization).
