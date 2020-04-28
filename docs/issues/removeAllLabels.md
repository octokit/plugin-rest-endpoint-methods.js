---
name: Remove all labels from an issue
example: octokit.issues.removeAllLabels({ owner, repo, issue_number })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Remove all labels from an issue

```js
octokit.issues.removeAllLabels({
  owner,
  repo,
  issue_number,
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
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/labels/#remove-all-labels-from-an-issue).
