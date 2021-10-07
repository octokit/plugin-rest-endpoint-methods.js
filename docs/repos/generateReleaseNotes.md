---
name: Generate release notes content for a release
example: octokit.rest.repos.generateReleaseNotes({ owner, repo, tag_name })
route: POST /repos/{owner}/{repo}/releases/generate-notes
scope: repos
type: API method
---

# Generate release notes content for a release

Generate a name and body describing a [release](https://docs.github.com/rest/reference/repos#releases). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.

```js
octokit.rest.repos.generateReleaseNotes({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>tag_name</td><td>yes</td><td>

The tag name for the release. This can be an existing tag or a new one.

</td></tr>
<tr><td>target_commitish</td><td>no</td><td>

Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.

</td></tr>
<tr><td>previous_tag_name</td><td>no</td><td>

The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.

</td></tr>
<tr><td>configuration_file_path</td><td>no</td><td>

Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#generate-release-notes).
