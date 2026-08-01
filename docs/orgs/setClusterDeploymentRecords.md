---
name: Set cluster deployment records
example: octokit.rest.orgs.setClusterDeploymentRecords({ org, cluster, logical_environment, deployments, deployments[].name, deployments[].digest, deployments[].deployment_name })
route: POST /orgs/{org}/artifacts/metadata/deployment-record/cluster/{cluster}
scope: orgs
type: API method
---

# Set cluster deployment records

Set deployment records for a given cluster.

```js
octokit.rest.orgs.setClusterDeploymentRecords({
        org,
cluster,
logical_environment,
deployments,
deployments[].name,
deployments[].digest,
deployments[].deployment_name
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>cluster</td><td>yes</td><td>

The cluster name.

</td></tr>
<tr><td>logical_environment</td><td>yes</td><td>

The stage of the deployment.

</td></tr>
<tr><td>physical_environment</td><td>no</td><td>

The physical region of the deployment.

</td></tr>
<tr><td>deployments</td><td>yes</td><td>

The list of deployments to record.

</td></tr>
<tr><td>deployments[].name</td><td>yes</td><td>

The name of the artifact. Note that if multiple deployments have identical 'digest' parameter values,
the name parameter must also be identical across all entries.

</td></tr>
<tr><td>deployments[].digest</td><td>yes</td><td>

The hex encoded digest of the artifact. Note that if multiple deployments have identical 'digest' parameter values,
the name and version parameters must also be identical across all entries.

</td></tr>
<tr><td>deployments[].version</td><td>no</td><td>

The artifact version. Note that if multiple deployments have identical 'digest' parameter values,
the version parameter must also be identical across all entries.

</td></tr>
<tr><td>deployments[].status</td><td>no</td><td>

The deployment status of the artifact.

</td></tr>
<tr><td>deployments[].deployment_name</td><td>yes</td><td>

The unique identifier for the deployment represented by the new record. To accommodate differing
containers and namespaces within a record set, the following format is recommended:
{namespaceName}-{deploymentName}-{containerName}

</td></tr>
<tr><td>deployments[].github_repository</td><td>no</td><td>

The name of the GitHub repository associated with the artifact. This should be used
when there are no provenance attestations available for the artifact. The repository
must belong to the organization specified in the path parameter.

If a provenance attestation is available for the artifact, the API will use
the repository information from the attestation instead of this parameter.

</td></tr>
<tr><td>deployments[].tags</td><td>no</td><td>

Key-value pairs to tag the deployment record.

</td></tr>
<tr><td>deployments[].tags.*</td><td>no</td><td>

</td></tr>
<tr><td>deployments[].runtime_risks</td><td>no</td><td>

A list of runtime risks associated with the deployment.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#set-cluster-deployment-records).
