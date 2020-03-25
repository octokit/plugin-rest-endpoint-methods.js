# Get contents

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit `:path`, you will receive the contents of all files in the repository.

Files and symlinks support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML (when supported). All content types support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) to ensure the content is returned in a consistent object format.

**Note**:

- To get a repository's contents recursively, you can [recursively get the tree](https://developer.github.com/v3/git/trees/).
- This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees API](https://developer.github.com/v3/git/trees/#get-a-tree).
- This API supports files up to 1 megabyte in size.

The response will be an array of objects, one object for each item in the directory.

When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW). In the next major version of the API, the type will be returned as "submodule".

If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the [format shown above](https://developer.github.com/v3/repos/contents/#response-if-content-is-a-file)).

Otherwise, the API responds with an object describing the symlink itself:

The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the github.com URLs (`html_url` and `_links["html"]`) will have null values.

```js
octokit.repos.getContents({
  owner,
  repo,
  path,
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
<tr><td>path</td><td>yes</td><td>

path parameter

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/contents/#get-contents).
