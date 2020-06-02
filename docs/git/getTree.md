---
name: Get a tree
example: octokit.git.getTree({ owner, repo, tree_sha })
route: GET /repos/{owner}/{repo}/git/trees/{tree_sha}
scope: git
type: API method
---

# Get a tree

Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.

```js
octokit.git.getTree({
  owner,
  repo,
  tree_sha,
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
<tr><td>tree_sha</td><td>yes</td><td>

</td></tr>
<tr><td>recursive</td><td>no</td><td>

Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/git/trees/#get-a-tree).
