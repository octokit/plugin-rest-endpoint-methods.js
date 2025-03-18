---
name: Get GitHub-hosted runners machine specs for an organization
example: octokit.rest.actions.getHostedRunnersMachineSpecsForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/machine-sizes
scope: actions
type: API method
---

# Get GitHub-hosted runners machine specs for an organization

Get the list of machine specs available for GitHub-hosted runners for an organization.

```js
octokit.rest.actions.getHostedRunnersMachineSpecsForOrg({
  org,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-github-hosted-runners-machine-specs-for-an-organization).
