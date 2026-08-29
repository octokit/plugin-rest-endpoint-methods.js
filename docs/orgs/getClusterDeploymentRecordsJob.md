---

name: Get cluster deployment records job status
example: octokit.rest.orgs.getClusterDeploymentRecordsJob({ org, cluster, job_id })
route: GET /orgs/{org}/artifacts/metadata/deployment-record/cluster/{cluster}/jobs/{job_id}
scope: orgs
type: API method
---

# Get cluster deployment records job status

Get the status and results of a previously created cluster deployment records job.

```js
octokit.rest.orgs.getClusterDeploymentRecordsJob({
  org,
  cluster,
  job_id,
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
<tr><td>cluster</td><td>yes</td><td>

The cluster name.

</td></tr>
<tr><td>job_id</td><td>yes</td><td>

The ID of the job.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/artifact-metadata#get-cluster-deployment-records-job-status).
