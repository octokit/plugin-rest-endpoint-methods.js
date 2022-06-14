---
name: List runner applications for a repository
example: octokit.rest.actions.listRunnerApplicationsForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/actions/runners/downloads
scope: actions
type: API method
---

# List runner applications for a repository

Lists binaries for the runner application that you can download and run.

You must authenticate using an access token with the `repo` scope to use this endpoint.

```js
octokit.rest.actions.listRunnerApplicationsForRepo({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository).
