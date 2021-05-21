---
name: Create reaction for an issue
example: octokit.rest.reactions.createForIssue({ owner, repo, issue_number, content })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/reactions
scope: reactions
type: API method
---

# Create reaction for an issue

Create a reaction to an [issue](https://docs.github.com/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.

```js
octokit.rest.reactions.createForIssue({
  owner,
  repo,
  issue_number,
  content,
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

issue_number parameter

</td></tr>
<tr><td>content</td><td>yes</td><td>

The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue).
