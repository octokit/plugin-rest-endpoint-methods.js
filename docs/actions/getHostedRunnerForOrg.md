---
name: Get a GitHub-hosted runner for an organization
example: octokit.rest.actions.getHostedRunnerForOrg({ org, hosted_runner_id })
route: GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}
scope: actions
type: API method
---

# Get a GitHub-hosted runner for an organization

Gets a GitHub-hosted runner configured in an organization.

OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.getHostedRunnerForOrg({
  org,
  hosted_runner_id,
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
<tr><td>hosted_runner_id</td><td>yes</td><td>

Unique identifier of the GitHub-hosted runner.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-a-github-hosted-runner-for-an-organization).
