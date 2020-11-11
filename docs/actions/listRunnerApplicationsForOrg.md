---
name: List runner applications for an organization
example: octokit.actions.listRunnerApplicationsForOrg({ org })
route: GET /orgs/{org}/actions/runners/downloads
scope: actions
type: API method
---

# List runner applications for an organization

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.listRunnerApplicationsForOrg({
  org
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization).
