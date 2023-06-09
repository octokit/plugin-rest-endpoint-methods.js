---
name: Set labels for an issue
example: octokit.rest.issues.setLabels({ owner, repo, issue_number, labels[].name })
route: PUT /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Set labels for an issue

Removes any previous labels and sets the new labels for an issue.

```js
octokit.rest.issues.setLabels({
        owner,
repo,
issue_number,
labels[].name
      })
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

</td></tr>
<tr><td>labels[].name</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#set-labels-for-an-issue).
