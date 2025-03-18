---
name: Get platforms for GitHub-hosted runners in an organization
example: octokit.rest.actions.getHostedRunnersPlatformsForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/platforms
scope: actions
type: API method
---

# Get platforms for GitHub-hosted runners in an organization

Get the list of platforms available for GitHub-hosted runners for an organization.

```js
octokit.rest.actions.getHostedRunnersPlatformsForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-platforms-for-github-hosted-runners-in-an-organization).
