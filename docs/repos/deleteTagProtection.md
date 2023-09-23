---
name: Delete a tag protection state for a repository
example: octokit.rest.repos.deleteTagProtection({ owner, repo, tag_protection_id })
route: DELETE /repos/{owner}/{repo}/tags/protection/{tag_protection_id}
scope: repos
type: API method
---

# Delete a tag protection state for a repository

This deletes a tag protection state for a repository.
This endpoint is only available to repository administrators.

```js
octokit.rest.repos.deleteTagProtection({
  owner,
  repo,
  tag_protection_id,
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
<tr><td>tag_protection_id</td><td>yes</td><td>

The unique identifier of the tag protection.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/tags#delete-a-tag-protection-state-for-a-repository).
