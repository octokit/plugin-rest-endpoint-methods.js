---
name: Get a check run
example: octokit.rest.checks.get({ owner, repo, check_run_id })
route: GET /repos/{owner}/{repo}/check-runs/{check_run_id}
scope: checks
type: API method
---

# Get a check run

Gets a single check run using its `id`.

> [!NOTE]
> The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```js
octokit.rest.checks.get({
  owner,
  repo,
  check_run_id,
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>check_run_id</td><td>yes</td><td>

The unique identifier of the check run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/checks/runs#get-a-check-run).
