---
name: Create a tree
example: octokit.git.createTree({ owner, repo, tree })
route: POST /repos/{owner}/{repo}/git/trees
scope: git
type: API method
---

# Create a tree

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)" and "[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference)."

```js
octokit.git.createTree({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

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

The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/git/trees/#create-a-tree).
