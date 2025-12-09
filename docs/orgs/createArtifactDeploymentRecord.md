---
name: Create an artifact deployment record
example: octokit.rest.orgs.createArtifactDeploymentRecord({ org, name, digest, status, logical_environment, deployment_name })
route: POST /orgs/{org}/artifacts/metadata/deployment-record
scope: orgs
type: API method
---

# Create an artifact deployment record

Create or update deployment records for an artifact associated with an organization.
This endpoint allows you to record information about a specific artifact, such as its name, digest, environments, cluster, and deployment.

```js
octokit.rest.orgs.createArtifactDeploymentRecord({
  org,
  name,
  digest,
  status,
  logical_environment,
  deployment_name,
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

The hex encoded digest of the artifact.

</td></tr>
<tr><td>version</td><td>no</td><td>

The artifact version.

</td></tr>
<tr><td>status</td><td>yes</td><td>

The status of the artifact. Can be either deployed or decommissioned.

</td></tr>
<tr><td>logical_environment</td><td>yes</td><td>

The stage of the deployment.

</td></tr>
<tr><td>physical_environment</td><td>no</td><td>

The physical region of the deployment.

</td></tr>
<tr><td>cluster</td><td>no</td><td>

The deployment cluster.

</td></tr>
<tr><td>deployment_name</td><td>yes</td><td>

The name of the deployment.

</td></tr>
<tr><td>tags</td><td>no</td><td>

The tags associated with the deployment.

</td></tr>
<tr><td>tags.*</td><td>no</td><td>

</td></tr>
<tr><td>runtime_risks</td><td>no</td><td>

A list of runtime risks associated with the deployment.

</td></tr>
<tr><td>github_repository</td><td>no</td><td>

The name of the GitHub repository associated with the artifact. This should be used
when there are no provenance attestations available for the artifact. The repository
must belong to the organization specified in the path parameter.

If a provenance attestation is available for the artifact, the API will use
the repository information from the attestation instead of this parameter.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#create-an-artifact-deployment-record).
