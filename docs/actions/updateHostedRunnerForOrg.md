---
name: Update a GitHub-hosted runner for an organization
example: octokit.rest.actions.updateHostedRunnerForOrg({ org, hosted_runner_id })
route: PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}
scope: actions
type: API method
---

# Update a GitHub-hosted runner for an organization

Updates a GitHub-hosted runner for an organization.
OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.updateHostedRunnerForOrg({
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
<tr><td>name</td><td>no</td><td>

Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '\_'.

</td></tr>
<tr><td>runner_group_id</td><td>no</td><td>

The existing runner group to add this runner to.

</td></tr>
<tr><td>maximum_runners</td><td>no</td><td>

The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.

</td></tr>
<tr><td>enable_static_ip</td><td>no</td><td>

Whether this runner should be updated with a static public IP. Note limit on account. To list limits on account, use `GET actions/hosted-runners/limits`

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#update-a-github-hosted-runner-for-an-organization).
