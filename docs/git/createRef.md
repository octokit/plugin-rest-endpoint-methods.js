---
name: Create a reference
example: octokit.git.createRef({ owner, repo, ref, sha })
route: POST /repos/{owner}/{repo}/git/refs
scope: git
type: API method
---

# Create a reference

Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.

```js
octokit.git.createRef({
  owner,
  repo,
  ref,
  sha
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

The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The SHA1 value for this reference.

</td></tr>
<tr><td>key</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-reference).
