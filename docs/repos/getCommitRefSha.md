# Get a commit sha

**This method is deprecated.**

**Note:** To access this endpoint, you must provide a custom [media type](https://developer.github.com/v3/media) in the `Accept` header:

```
application/vnd.github.VERSION.sha
```

Returns the SHA-1 of the commit reference. You must have `read` access for the repository to get the SHA-1 of a commit reference. You can use this endpoint to check if a remote reference's SHA-1 is the same as your local reference's SHA-1 by providing the local SHA-1 reference as the ETag.

```js
octokit.repos.getCommitRefSha(owner, ref, repo);
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
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
