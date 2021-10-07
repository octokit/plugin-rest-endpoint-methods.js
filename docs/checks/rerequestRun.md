---
name: Rerequest a check run
example: octokit.rest.checks.rerequestRun({ owner, repo, check_run_id })
route: POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest
scope: checks
type: API method
---

# Rerequest a check run

Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check run, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>check_run_id</td><td>yes</td><td>

check_run_id parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#rerequest-a-check-run).
