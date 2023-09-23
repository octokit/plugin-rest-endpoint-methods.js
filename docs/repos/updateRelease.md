---
name: Update a release
example: octokit.rest.repos.updateRelease({ owner, repo, release_id })
route: PATCH /repos/{owner}/{repo}/releases/{release_id}
scope: repos
type: API method
---

# Update a release

Users with push access to the repository can edit a release.

```js
octokit.rest.repos.updateRelease({
  owner,
  repo,
  release_id,
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
<tr><td>release_id</td><td>yes</td><td>

The unique identifier of the release.

</td></tr>
<tr><td>tag_name</td><td>no</td><td>

The name of the tag.

</td></tr>
<tr><td>target_commitish</td><td>no</td><td>

Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch.

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the release.

</td></tr>
<tr><td>body</td><td>no</td><td>

Text describing the contents of the tag.

</td></tr>
<tr><td>draft</td><td>no</td><td>

`true` makes the release a draft, and `false` publishes the release.

</td></tr>
<tr><td>prerelease</td><td>no</td><td>

`true` to identify the release as a prerelease, `false` to identify the release as a full release.

</td></tr>
<tr><td>make_latest</td><td>no</td><td>

Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.

</td></tr>
<tr><td>discussion_category_name</td><td>no</td><td>

If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/releases/releases#update-a-release).
