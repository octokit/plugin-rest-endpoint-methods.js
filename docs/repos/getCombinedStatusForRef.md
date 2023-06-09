---
name: Get the combined status for a specific reference
example: octokit.rest.repos.getCombinedStatusForRef({ owner, repo, ref })
route: GET /repos/{owner}/{repo}/commits/{ref}/status
scope: repos
type: API method
---

# Get the combined status for a specific reference

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

Additionally, a combined `state` is returned. The `state` is one of:

- **failure** if any of the contexts report as `error` or `failure`
- **pending** if there are no statuses or a context is `pending`
- **success** if the latest status for all contexts is `success`

```js
octokit.rest.repos.getCombinedStatusForRef({
  owner,
  repo,
  ref,
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
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/commits/statuses#get-the-combined-status-for-a-specific-reference).
