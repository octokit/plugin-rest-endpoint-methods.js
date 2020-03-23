# Get a single check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

```js
octokit.checks.get({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>check_run_id</td><td>yes</td><td>

check_run_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
