---
name: List runner applications for a repository
example: octokit.actions.listDownloadsForSelfHostedRunnerApplication({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runners/downloads
scope: actions
type: API method
---

# List runner applications for a repository

**Deprecated:** This method has been renamed to actions.listRunnerApplicationsForRepo

Lists binaries for the runner application that you can download and run. Anyone with admin access to the repository and an access token with the `repo` scope can use this endpoint.

```js
octokit.actions.listDownloadsForSelfHostedRunnerApplication({
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
