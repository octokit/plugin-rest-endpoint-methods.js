---
name: List runner applications for an organization
example: octokit.rest.actions.listRunnerApplicationsForOrg({ org })
route: GET /orgs/{org}/actions/runners/downloads
scope: actions
type: API method
---

# List runner applications for an organization

Lists binaries for the runner application that you can download and run.

Authenticated users must have admin access to the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```js
octokit.rest.actions.listRunnerApplicationsForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/self-hosted-runners#list-runner-applications-for-an-organization).
