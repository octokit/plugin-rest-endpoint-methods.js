---

name: Request generation of a software bill of materials (SBOM) for a repository.
example: octokit.rest.dependencyGraph.generateSbomReport({ owner, repo })
route: GET /repos/{owner}/{repo}/dependency-graph/sbom/generate-report
scope: dependencyGraph
type: API method
---

# Request generation of a software bill of materials (SBOM) for a repository.

Triggers a job to generate a software bill of materials (SBOM) for a repository in SPDX JSON format.

```js
octokit.rest.dependencyGraph.generateSbomReport({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependency-graph/sboms#request-generation-of-a-software-bill-of-materials-sbom-for-a-repository).
