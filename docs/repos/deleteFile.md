---
name: Delete a file
example: octokit.rest.repos.deleteFile({ owner, repo, path, message, sha })
route: DELETE /repos/{owner}/{repo}/contents/{path}
scope: repos
type: API method
---

# Delete a file

Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.

```js
octokit.rest.repos.deleteFile({
  owner,
  repo,
  path,
  message,
  sha,
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
<tr><td>path</td><td>yes</td><td>

path parameter

</td></tr>
<tr><td>message</td><td>yes</td><td>

The commit message.

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The blob SHA of the file being replaced.

</td></tr>
<tr><td>branch</td><td>no</td><td>

The branch name. Default: the repository’s default branch (usually `master`)

</td></tr>
<tr><td>committer</td><td>no</td><td>

object containing information about the committer.

</td></tr>
<tr><td>committer.name</td><td>no</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>committer.email</td><td>no</td><td>

The email of the author (or committer) of the commit

</td></tr>
<tr><td>author</td><td>no</td><td>

object containing information about the author.

</td></tr>
<tr><td>author.name</td><td>no</td><td>

The name of the author (or committer) of the commit

</td></tr>
<tr><td>author.email</td><td>no</td><td>

The email of the author (or committer) of the commit

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#delete-a-file).
