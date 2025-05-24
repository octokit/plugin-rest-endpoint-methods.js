---
name: Rerequest a check run
example: octokit.rest.checks.rerequestRun({ owner, repo, check_run_id })
route: POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest
scope: checks
type: API method
---

# Rerequest a check run

Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, the `status` of the check suite it belongs to is reset to `queued` and the `conclusion` is cleared. The check run itself is not updated. GitHub apps recieving the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) with the `rerequested` action should then decide if the check run should be reset or updated and call the [update `check_run` endpoint](https://docs.github.com/rest/checks/runs#update-a-check-run) to update the check_run if desired.

For more information about how to re-run GitHub Actions jobs, see "[Re-run a job from a workflow run](https://docs.github.com/rest/actions/workflow-runs#re-run-a-job-from-a-workflow-run)".

```js
octokit.rest.checks.rerequestRun({
  owner,
  repo,
  check_run_id,
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
<tr><td>check_run_id</td><td>yes</td><td>

The unique identifier of the check run.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/checks/runs#rerequest-a-check-run).
