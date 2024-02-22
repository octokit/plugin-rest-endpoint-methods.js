---
name: Create a repository dispatch event
example: octokit.rest.repos.createDispatchEvent({ owner, repo, event_type })
route: POST /repos/{owner}/{repo}/dispatches
scope: repos
type: API method
---

# Create a repository dispatch event

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.

This input example shows how you can use the `client_payload` as a test to debug your workflow.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.repos.createDispatchEvent({
  owner,
  repo,
  event_type,
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
<tr><td>event_type</td><td>yes</td><td>

A custom webhook event name. Must be 100 characters or fewer.

</td></tr>
<tr><td>client_payload</td><td>no</td><td>

JSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10.

</td></tr>
<tr><td>client_payload.*</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#create-a-repository-dispatch-event).
