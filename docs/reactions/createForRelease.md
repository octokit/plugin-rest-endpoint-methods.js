---
name: Create reaction for a release
example: octokit.rest.reactions.createForRelease({ owner, repo, release_id, content })
route: POST /repos/{owner}/{repo}/releases/{release_id}/reactions
scope: reactions
type: API method
---

# Create reaction for a release

Create a reaction to a [release](https://docs.github.com/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

```js
octokit.rest.reactions.createForRelease({
  owner,
  repo,
  release_id,
  content,
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
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the release.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-release).
