---

name: Start a task
example: octokit.rest.agentTasks.createTaskInRepo({ owner, repo, prompt })
route: POST /agents/repos/{owner}/{repo}/tasks
scope: agentTasks
type: API method
---

# Start a task

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Starts a new Copilot cloud agent task for a repository.

This endpoint is only available to users with a Copilot Business or Copilot Enterprise subscription.

**Fine-grained access tokens for "Start a task"**

This endpoint works with the following fine-grained token types:

- [GitHub App user access tokens](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)
- [Fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)

The fine-grained token must have the following permission set:

- "Agent tasks" repository permissions (read and write)

GitHub App installation access tokens are not supported for this endpoint.

```js
octokit.rest.agentTasks.createTaskInRepo({
  owner,
  repo,
  prompt,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>prompt</td><td>yes</td><td>

The user's prompt for the agent

</td></tr>
<tr><td>model</td><td>no</td><td>

The model to use for this task. The allowed models may change over time and depend on the user's GitHub Copilot plan and organization policies. Currently supported values: `claude-sonnet-4.6`, `claude-opus-4.6`, `gpt-5.2-codex`, `gpt-5.3-codex`, `gpt-5.4`, `claude-sonnet-4.5`, `claude-opus-4.5`

</td></tr>
<tr><td>custom_agent</td><td>no</td><td>

Optional identifier for a custom agent to use for this task. Use the custom agent's filename without the extension - for example, for a `.github/agents/performance-optimizer.agent.md` custom agent, use `performance-optimizer`.

</td></tr>
<tr><td>create_pull_request</td><td>no</td><td>

Whether to create a PR.

</td></tr>
<tr><td>base_ref</td><td>no</td><td>

Base ref for new branch/PR

</td></tr>
<tr><td>head_ref</td><td>no</td><td>

Head ref for existing branch/PR. If provided with `base_ref`, the agent looks up open PR context for `head_ref` targeting `base_ref` and commits to `head_ref` instead of creating a new branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/agent-tasks/agent-tasks#start-a-task).
