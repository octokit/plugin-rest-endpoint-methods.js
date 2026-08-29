---

name: List issue types for a repository
example: octokit.rest.repos.listIssueTypes({ owner, repo })
route: GET /repos/{owner}/{repo}/issue-types
scope: repos
type: API method
---

# List issue types for a repository

Lists issue types available for a repository (inherited from its organization owner, with any per-repository overrides applied).
OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.
Fine-grained access tokens require the "Metadata" repository permission (read).

```js
octokit.rest.repos.listIssueTypes({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/issue-types#list-issue-types-for-a-repository).
