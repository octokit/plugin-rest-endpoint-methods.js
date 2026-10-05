---

name: List tasks
example: octokit.rest.agentTasks.listTasks()
route: GET /agents/tasks
scope: agentTasks
type: API method
---

# List tasks

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Returns a list of tasks for the authenticated user

**Fine-grained access tokens for "List tasks"**

This endpoint works with the following fine-grained token types:

- [GitHub App user access tokens](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
- [Fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

The fine-grained token must have the following permission set:

- "Agent tasks" repository permissions (read)

GitHub App installation access tokens are not supported for this endpoint.

```js
octokit.rest.agentTasks.listTasks();
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
    <tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The field to sort results by. Can be `updated_at` or `created_at`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort results. Can be `asc` or `desc`.

</td></tr>
<tr><td>state</td><td>no</td><td>

Comma-separated list of task states to filter by. Can be any combination of: `queued`, `in_progress`, `completed`, `failed`, `idle`, `waiting_for_user`, `timed_out`, `cancelled`.

</td></tr>
<tr><td>is_archived</td><td>no</td><td>

Filter by archived status. When `true`, returns only archived tasks. When `false` or omitted, returns only non-archived tasks. Defaults to `false`.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show tasks updated at or after this time (ISO 8601 timestamp)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/agent-tasks/agent-tasks#list-tasks).
