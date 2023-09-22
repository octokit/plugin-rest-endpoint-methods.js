---
name: Get repository content
example: octokit.rest.repos.getContent({ owner, repo, path })
route: GET /repos/{owner}/{repo}/contents/{path}
scope: repos
type: API method
---

# Get repository content

Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.

Files and symlinks support [a custom media type](https://docs.github.com/rest/overview/media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://docs.github.com/rest/overview/media-types) to ensure the content is returned in a consistent
object format.

**Notes**:

- To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/git/trees#get-a-tree).
- This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
  API](https://docs.github.com/rest/git/trees#get-a-tree).
- Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download.
  Size limits:
  If the requested file's size is:
- 1 MB or smaller: All features of this endpoint are supported.
- Between 1-100 MB: Only the `raw` or `object` [custom media types](https://docs.github.com/rest/repos/contents#custom-media-types-for-repository-contents) are supported. Both will work as normal, except that when using the `object` media type, the `content` field will be an empty string and the `encoding` field will be `"none"`. To get the contents of these larger files, use the `raw` media type.
- Greater than 100 MB: This endpoint is not supported.

If the content is a directory:
The response will be an array of objects, one object for each item in the directory.
When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
_should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
In the next major version of the API, the type will be returned as "submodule".

If the content is a symlink:
If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
describing the symlink itself.

If the content is a submodule:
The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
github.com URLs (`html_url` and `_links["html"]`) will have null values.

```js
octokit.rest.repos.getContent({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>path</td><td>yes</td><td>

path parameter

</td></tr>
<tr><td>ref</td><td>no</td><td>

The name of the commit/branch/tag. Default: the repository’s default branch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/contents#get-repository-content).
