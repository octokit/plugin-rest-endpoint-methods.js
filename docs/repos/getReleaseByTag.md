---
name: Get a release by tag name
example: octokit.repos.getReleaseByTag({ owner, repo, tag })
route: GET /repos/{owner}/{repo}/releases/tags/{tag}
scope: repos
type: API method
---

# Get a release by tag name

Get a published release with the specified tag.

```js
octokit.repos.getReleaseByTag({
  owner,
  repo,
  tag,
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
<tr><td>tag</td><td>yes</td><td>

tag parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/releases/#get-a-release-by-tag-name).
