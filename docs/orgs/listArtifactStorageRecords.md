---

name: List artifact storage records
example: octokit.rest.orgs.listArtifactStorageRecords({ org, subject_digest })
route: GET /orgs/{org}/artifacts/{subject_digest}/metadata/storage-records
scope: orgs
type: API method
---

# List artifact storage records

List artifact storage records with a given subject digest for repositories owned by an organization.

Results are filtered by the authenticated user's permissions; records for repositories the user cannot read are omitted. Fine-grained access tokens require the `artifact-metadata:read` permission.

```js
octokit.rest.orgs.listArtifactStorageRecords({
  org,
  subject_digest,
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
<tr><td>subject_digest</td><td>yes</td><td>

The parameter should be set to the attestation's subject's SHA256 digest, in the form `sha256:HEX_DIGEST`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#list-artifact-storage-records).
