---
name: Replace all labels for an issue
example: octokit.issues.replaceAllLabels({ owner, repo, issue_number })
route: PUT /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Replace all labels for an issue

```js
octokit.issues.replaceAllLabels({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

</td></tr>
<tr><td>labels</td><td>no</td><td>

The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/labels/#replace-all-labels-for-an-issue).
