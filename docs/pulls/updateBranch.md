# Update a pull request branch

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.

```js
octokit.pulls.updateBranch({
  owner,
  repo,
  pull_number,
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
<tr><td>pull_number</td><td>yes</td><td>

pull_number parameter

</td></tr>
<tr><td>expected_head_sha</td><td>no</td><td>

The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits on a repository](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/pulls/#update-a-pull-request-branch).
