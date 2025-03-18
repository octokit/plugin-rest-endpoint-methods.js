---
name: Get limits on GitHub-hosted runners for an organization
example: octokit.rest.actions.getHostedRunnersLimitsForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/limits
scope: actions
type: API method
---

# Get limits on GitHub-hosted runners for an organization

Get the GitHub-hosted runners limits for an organization.

```js
octokit.rest.actions.getHostedRunnersLimitsForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-limits-on-github-hosted-runners-for-an-organization).
