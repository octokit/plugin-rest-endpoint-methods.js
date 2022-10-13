---
name: Get a diff of the dependencies between commits
example: octokit.rest.dependencyGraph.diffRange({ owner, repo, basehead })
route: GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}
scope: dependencyGraph
type: API method
---

# Get a diff of the dependencies between commits

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

```js
octokit.rest.dependencyGraph.diffRange({
  owner,
  repo,
  basehead,
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
<tr><td>basehead</td><td>yes</td><td>

The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `{base}...{head}`.

</td></tr>
<tr><td>name</td><td>no</td><td>

The full path, relative to the repository root, of the dependency manifest file.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits).
