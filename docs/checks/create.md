---
name: Create a check run
example: octokit.rest.checks.create({ owner, repo })
route: POST /repos/{owner}/{repo}/check-runs
scope: checks
type: API method
---

# Create a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.

```js
octokit.rest.checks.create({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>status</td><td>no</td><td>

</td></tr>
<tr><td>*</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#create-a-check-run).
