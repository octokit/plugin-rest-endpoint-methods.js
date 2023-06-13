---
name: Delete an autolink reference from a repository
example: octokit.rest.repos.deleteAutolink({ owner, repo, autolink_id })
route: DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}
scope: repos
type: API method
---

# Delete an autolink reference from a repository

This deletes a single autolink reference by ID that was configured for the given repository.

Information about autolinks are only available to repository administrators.

```js
octokit.rest.repos.deleteAutolink({
  owner,
  repo,
  autolink_id,
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
<tr><td>autolink_id</td><td>yes</td><td>

The unique identifier of the autolink.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository).
