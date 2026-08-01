---
name: List artifact deployment records
example: octokit.rest.orgs.listArtifactDeploymentRecords({ org, subject_digest })
route: GET /orgs/{org}/artifacts/{subject_digest}/metadata/deployment-records
scope: orgs
type: API method
---

# List artifact deployment records

List deployment records for an artifact metadata associated with an organization.

```js
octokit.rest.orgs.listArtifactDeploymentRecords({
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

The SHA256 digest of the artifact, in the form `sha256:HEX_DIGEST`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#list-artifact-deployment-records).
