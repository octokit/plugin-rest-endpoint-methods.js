---
name: Create a blob
example: octokit.git.createBlob({ owner, repo, content })
route: POST /repos/{owner}/{repo}/git/blobs
scope: git
type: API method
---

# Create a blob

```js
octokit.git.createBlob({
  owner,
  repo,
  content
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
<tr><td>content</td><td>yes</td><td>

The new blob's content.

</td></tr>
<tr><td>encoding</td><td>no</td><td>

The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-blob).
