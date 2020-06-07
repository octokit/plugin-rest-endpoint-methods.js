---
name: List repository webhooks
example: octokit.repos.listHooks({ owner, repo })
route: GET /repos/{owner}/{repo}/hooks
scope: repos
type: API method
---

# List repository webhooks

**Deprecated:** This method has been renamed to repos.listWebhooks

```js
octokit.repos.listHooks({
  owner,
  repo,
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/hooks/#list-repository-webhooks).
