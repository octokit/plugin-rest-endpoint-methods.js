---
name: Delete a release reaction
example: octokit.rest.reactions.deleteForRelease({ owner, repo, release_id, reaction_id })
route: DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}
scope: reactions
type: API method
---

# Delete a release reaction

**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.

Delete a reaction to a [release](https://docs.github.com/rest/reference/repos#releases).

```js
octokit.rest.reactions.deleteForRelease({
  owner,
  repo,
  release_id,
  reaction_id,
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
<tr><td>release_id</td><td>yes</td><td>

The unique identifier of the release.

</td></tr>
<tr><td>reaction_id</td><td>yes</td><td>

The unique identifier of the reaction.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions/#delete-a-release-reaction).
