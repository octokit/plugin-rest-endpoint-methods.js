---
name: Merge a branch
example: octokit.repos.merge({ owner, repo, base, head })
route: POST /repos/{owner}/{repo}/merges
scope: repos
type: API method
---

# Merge a branch

```js
octokit.repos.merge({
  owner,
  repo,
  base,
  head
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
<tr><td>base</td><td>yes</td><td>

The name of the base branch that the head will be merged into.

</td></tr>
<tr><td>head</td><td>yes</td><td>

The head to merge. This can be a branch name or a commit SHA1.

</td></tr>
<tr><td>commit_message</td><td>no</td><td>

Commit message to use for the merge commit. If omitted, a default message will be used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#merge-a-branch).
