---
name: List runner applications for a repository
example: octokit.actions.listRunnerApplicationsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runners/downloads
scope: actions
type: API method
---

# List runner applications for a repository

Lists binaries for the runner application that you can download and run. Anyone with admin access to the repository can use this endpoint. GitHub Apps must have the `administration:read` repository permission to use this endpoint.

```js
octokit.actions.listRunnerApplicationsForRepo({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runners/#list-runner-applications-for-a-repository).
