---
name: Add labels to an issue
example: octokit.issues.addLabels({ owner, repo, issue_number, labels })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Add labels to an issue

```js
octokit.issues.addLabels({
  owner,
  repo,
  issue_number,
  labels,
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
<tr><td>labels</td><td>yes</td><td>

The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/labels/#add-labels-to-an-issue).
