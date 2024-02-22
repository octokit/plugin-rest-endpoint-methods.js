---
name: Create or update file contents
example: octokit.rest.repos.createOrUpdateFileContents({ owner, repo, path, message, content, committer.name, committer.email, author.name, author.email })
route: PUT /repos/{owner}/{repo}/contents/{path}
scope: repos
type: API method
---

# Create or update file contents

Creates a new file or replaces an existing file in a repository.

**Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/rest/repos/contents/#delete-a-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The `workflow` scope is also required in order to modify files in the `.github/workflows` directory.

```js
octokit.rest.repos.createOrUpdateFileContents({
        owner,
repo,
path,
message,
content,
committer.name,
committer.email,
author.name,
author.email
      })
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
<tr><td>path</td><td>yes</td><td>

path parameter

</td></tr>
<tr><td>message</td><td>yes</td><td>

The commit message.

</td></tr>
<tr><td>content</td><td>yes</td><td>

The new file content, using Base64 encoding.

</td></tr>
<tr><td>sha</td><td>no</td><td>

**Required if you are updating a file**. The blob SHA of the file being replaced.

</td></tr>
<tr><td>branch</td><td>no</td><td>

The branch name. Default: the repository’s default branch.

</td></tr>
<tr><td>committer</td><td>no</td><td>

The person that committed the file. Default: the authenticated user.

</td></tr>
<tr><td>committer.name</td><td>yes</td><td>

The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.

</td></tr>
<tr><td>committer.email</td><td>yes</td><td>

The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.

</td></tr>
<tr><td>committer.date</td><td>no</td><td>

</td></tr>
<tr><td>author</td><td>no</td><td>

The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.

</td></tr>
<tr><td>author.name</td><td>yes</td><td>

The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.

</td></tr>
<tr><td>author.email</td><td>yes</td><td>

The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.

</td></tr>
<tr><td>author.date</td><td>no</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/contents#create-or-update-file-contents).
