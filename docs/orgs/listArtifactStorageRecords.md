---
name: List artifact storage records
example: octokit.rest.orgs.listArtifactStorageRecords({ org, subject_digest })
route: GET /orgs/{org}/artifacts/{subject_digest}/metadata/storage-records
scope: orgs
type: API method
---

# List artifact storage records

List a collection of artifact storage records with a given subject digest that are associated with repositories owned by an organization.

The collection of storage records returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `content:read` permission is required.

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
