---

name: Get a task by ID
example: octokit.rest.agentTasks.getTaskById({ task_id })
route: GET /agents/tasks/{task_id}
scope: agentTasks
type: API method
---

# Get a task by ID

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Returns a task by ID with its associated sessions

**Fine-grained access tokens for "Get a task by ID"**

This endpoint works with the following fine-grained token types:

- [GitHub App user access tokens](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
- [Fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

The fine-grained token must have the following permission set:

- "Agent tasks" repository permissions (read)

GitHub App installation access tokens are not supported for this endpoint.

```js
octokit.rest.agentTasks.getTaskById({
  task_id,
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
    <tr><td>task_id</td><td>yes</td><td>

The unique identifier of the task.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/agent-tasks/agent-tasks#get-a-task-by-id).
