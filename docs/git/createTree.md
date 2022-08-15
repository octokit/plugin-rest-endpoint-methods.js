---
name: Create a tree
example: octokit.rest.git.createTree({ owner, repo, tree })
route: POST /repos/{owner}/{repo}/git/trees
scope: git
type: API method
---

# Create a tree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/reference/git#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/reference/git#update-a-reference)."

Returns an error if you try to delete a file that does not exist.

```js
octokit.rest.git.createTree({
  owner,
  repo,
  tree,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>tree</td><td>yes</td><td>

Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.

</td></tr>
<tr><td>tree[].path</td><td>no</td><td>

The file referenced in the tree.

</td></tr>
<tr><td>tree[].mode</td><td>no</td><td>

The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.

</td></tr>
<tr><td>tree[].type</td><td>no</td><td>

Either `blob`, `tree`, or `commit`.

</td></tr>
<tr><td>tree[].sha</td><td>no</td><td>

The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

</td></tr>
<tr><td>tree[].content</td><td>no</td><td>

The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.

**Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.

</td></tr>
<tr><td>base_tree</td><td>no</td><td>

The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/git#create-a-tree).
