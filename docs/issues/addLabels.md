---
name: Add labels to an issue
example: octokit.rest.issues.addLabels({ owner, repo, issue_number, labels[].name })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/labels
scope: issues
type: API method
---

# Add labels to an issue

```js
octokit.rest.issues.addLabels({
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

The name of the repository. The name is not case sensitive.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues#add-labels-to-an-issue).
