---
name: Get the combined status for a specific reference
example: octokit.rest.repos.getCombinedStatusForRef({ owner, repo, ref })
route: GET /repos/{owner}/{repo}/commits/{ref}/status
scope: repos
type: API method
---

# Get the combined status for a specific reference

Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.

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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-the-combined-status-for-a-specific-reference).
