---

name: Fetch a software bill of materials (SBOM) for a repository.
example: octokit.rest.dependencyGraph.fetchSbomReport({ owner, repo, sbom_uuid })
route: GET /repos/{owner}/{repo}/dependency-graph/sbom/fetch-report/{sbom_uuid}
scope: dependencyGraph
type: API method
---

# Fetch a software bill of materials (SBOM) for a repository.

Fetches a previously generated software bill of materials (SBOM) for a repository.
When the SBOM is ready, the response is a 302 redirect to a temporary download URL for the SBOM in SPDX JSON format.
The generated SBOM report may be retained for up to one week from the original request.
The temporary download URL returned by this endpoint expires separately, and its expiry is set when the fetch request is made.

```js
octokit.rest.dependencyGraph.fetchSbomReport({
  owner,
  repo,
  sbom_uuid,
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
<tr><td>sbom_uuid</td><td>yes</td><td>

The unique identifier of the SBOM export.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependency-graph/sboms#fetch-a-software-bill-of-materials-sbom-for-a-repository).
