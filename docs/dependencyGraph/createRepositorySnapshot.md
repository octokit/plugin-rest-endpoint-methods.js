---
name: Create a snapshot of dependencies for a repository
example: octokit.rest.dependencyGraph.createRepositorySnapshot({ owner, repo, version, job, job.id, job.correlator, sha, ref, detector, detector.name, detector.version, detector.url, manifests.*.name, scanned })
route: POST /repos/{owner}/{repo}/dependency-graph/snapshots
scope: dependencyGraph
type: API method
---

# Create a snapshot of dependencies for a repository

Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.

```js
octokit.rest.dependencyGraph.createRepositorySnapshot({
        owner,
repo,
version,
job,
job.id,
job.correlator,
sha,
ref,
detector,
detector.name,
detector.version,
detector.url,
manifests.*.name,
scanned
      })
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
<tr><td>version</td><td>yes</td><td>

The version of the repository snapshot submission.

</td></tr>
<tr><td>job</td><td>yes</td><td>

</td></tr>
<tr><td>job.id</td><td>yes</td><td>

The external ID of the job.

</td></tr>
<tr><td>job.correlator</td><td>yes</td><td>

Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.

</td></tr>
<tr><td>job.html_url</td><td>no</td><td>

The url for the job.

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

The repository branch that triggered this snapshot.

</td></tr>
<tr><td>detector</td><td>yes</td><td>

A description of the detector used.

</td></tr>
<tr><td>detector.name</td><td>yes</td><td>

The name of the detector used.

</td></tr>
<tr><td>detector.version</td><td>yes</td><td>

The version of the detector used.

</td></tr>
<tr><td>detector.url</td><td>yes</td><td>

The url of the detector used.

</td></tr>
<tr><td>metadata</td><td>no</td><td>

User-defined metadata to store domain-specific information limited to 8 keys with scalar values.

</td></tr>
<tr><td>metadata.*</td><td>no</td><td>

</td></tr>
<tr><td>manifests</td><td>no</td><td>

A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.

</td></tr>
<tr><td>manifests.*</td><td>no</td><td>

</td></tr>
<tr><td>manifests.*.name</td><td>yes</td><td>

The name of the manifest.

</td></tr>
<tr><td>manifests.*.file</td><td>no</td><td>

</td></tr>
<tr><td>manifests.*.file.source_location</td><td>no</td><td>

The path of the manifest file relative to the root of the Git repository.

</td></tr>
<tr><td>manifests.*.metadata</td><td>no</td><td>

User-defined metadata to store domain-specific information limited to 8 keys with scalar values.

</td></tr>
<tr><td>manifests.*.metadata.*</td><td>no</td><td>

</td></tr>
<tr><td>manifests.*.resolved</td><td>no</td><td>

A collection of resolved package dependencies.

</td></tr>
<tr><td>manifests.*.resolved.*</td><td>no</td><td>

</td></tr>
<tr><td>manifests.*.resolved.*.package_url</td><td>no</td><td>

Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.

</td></tr>
<tr><td>manifests.*.resolved.*.metadata</td><td>no</td><td>

User-defined metadata to store domain-specific information limited to 8 keys with scalar values.

</td></tr>
<tr><td>manifests.*.resolved.*.metadata.*</td><td>no</td><td>

</td></tr>
<tr><td>manifests.*.resolved.*.relationship</td><td>no</td><td>

A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.

</td></tr>
<tr><td>manifests.*.resolved.*.scope</td><td>no</td><td>

A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.

</td></tr>
<tr><td>manifests.*.resolved.*.dependencies</td><td>no</td><td>

Array of package-url (PURLs) of direct child dependencies.

</td></tr>
<tr><td>scanned</td><td>yes</td><td>

The time at which the snapshot was scanned.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository).
