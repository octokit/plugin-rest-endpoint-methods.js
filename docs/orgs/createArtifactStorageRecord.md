---
name: Create artifact metadata storage record
example: octokit.rest.orgs.createArtifactStorageRecord({ org, name, digest, registry_url })
route: POST /orgs/{org}/artifacts/metadata/storage-record
scope: orgs
type: API method
---

# Create artifact metadata storage record

Create metadata storage records for artifacts associated with an organization.
This endpoint will create a new artifact storage record on behalf of any artifact matching the provided digest and
associated with a repository owned by the organization.

```js
octokit.rest.orgs.createArtifactStorageRecord({
  org,
  name,
  digest,
  registry_url,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the artifact.

</td></tr>
<tr><td>digest</td><td>yes</td><td>

The digest of the artifact (algorithm:hex-encoded-digest).

</td></tr>
<tr><td>artifact_url</td><td>no</td><td>

The URL where the artifact is stored.

</td></tr>
<tr><td>path</td><td>no</td><td>

The path of the artifact.

</td></tr>
<tr><td>registry_url</td><td>yes</td><td>

The base URL of the artifact registry.

</td></tr>
<tr><td>repository</td><td>no</td><td>

The repository name within the registry.

</td></tr>
<tr><td>status</td><td>no</td><td>

The status of the artifact (e.g., active, inactive).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record).
