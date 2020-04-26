---
name: Create a release
example: octokit.repos.createRelease({ owner, repo, tag_name })
route: POST /repos/{owner}/{repo}/releases
scope: repos
type: API method
---

# Create a release

Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

```js
octokit.repos.createRelease({
  owner,
  repo,
  tag_name,
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>tag_name</td><td>yes</td><td>

The name of the tag.

</td></tr>
<tr><td>target_commitish</td><td>no</td><td>

Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the release.

</td></tr>
<tr><td>body</td><td>no</td><td>

Text describing the contents of the tag.

</td></tr>
<tr><td>draft</td><td>no</td><td>

`true` to create a draft (unpublished) release, `false` to create a published one.

</td></tr>
<tr><td>prerelease</td><td>no</td><td>

`true` to identify the release as a prerelease. `false` to identify the release as a full release.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/releases/#create-a-release).
