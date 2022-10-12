---
name: List repository webhooks
example: octokit.rest.repos.listWebhooks({ owner, repo })
route: GET /repos/{owner}/{repo}/hooks
scope: repos
type: API method
---

# List repository webhooks

Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.

```js
octokit.rest.repos.listWebhooks({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/webhooks/repos#list-repository-webhooks).
