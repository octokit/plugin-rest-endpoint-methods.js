---

name: Add labels to an issue
example: octokit.rest.issues.addLabels({ owner, repo, issue_number })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Add labels to an issue

Adds labels to an issue.

```js
octokit.rest.issues.addLabels({
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
<tr><td>labels</td><td>no</td><td>

The labels to add to the issue's existing labels. You can also pass an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. To replace all of the labels for an issue, use "[Set labels for an issue](https://docs.github.com/rest/issues/labels#set-labels-for-an-issue)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/labels#add-labels-to-an-issue).
