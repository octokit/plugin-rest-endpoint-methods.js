---
name: Remove all labels from an issue
example: octokit.rest.issues.removeAllLabels({ owner, repo, issue_number })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Remove all labels from an issue

Removes all labels from an issue.

```js
octokit.rest.issues.removeAllLabels({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

The number that identifies the issue.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/labels#remove-all-labels-from-an-issue).
