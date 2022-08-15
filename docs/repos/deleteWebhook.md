---
name: Delete a repository webhook
example: octokit.rest.repos.deleteWebhook({ owner, repo, hook_id })
route: DELETE /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Delete a repository webhook

```js
octokit.rest.repos.deleteWebhook({
  owner,
  repo,
  hook_id,
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
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/webhooks/repos#delete-a-repository-webhook).
