---

name: Create a cluster deployment records job
example: octokit.rest.orgs.createClusterDeploymentRecordsJob({ org, cluster, logical_environment, deployments, deployments[].name, deployments[].digest, deployments[].deployment_name })
route: POST /orgs/{org}/artifacts/metadata/deployment-record/cluster/{cluster}/jobs
scope: orgs
type: API method
---

# Create a cluster deployment records job

Create a background job to set deployment records for a given cluster.
Performs validation and permission checks synchronously, returning rejected
deployments immediately, then enqueues a background job for the actual
deployment updates. Use the companion GET endpoint to poll for job status.

```js
octokit.rest.orgs.createClusterDeploymentRecordsJob({
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

The name of the artifact.

</td></tr>
<tr><td>deployments[].digest</td><td>yes</td><td>

The hex encoded digest of the artifact.

</td></tr>
<tr><td>deployments[].version</td><td>no</td><td>

The artifact version.

</td></tr>
<tr><td>deployments[].status</td><td>no</td><td>

The deployment status of the artifact.

</td></tr>
<tr><td>deployments[].deployment_name</td><td>yes</td><td>

The unique identifier for the deployment represented by the new record.

</td></tr>
<tr><td>deployments[].github_repository</td><td>no</td><td>

The name of the GitHub repository associated with the artifact.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#create-a-cluster-deployment-records-job).
