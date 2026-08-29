---

name: Dismiss an issue suggestion
example: octokit.rest.issues.dismissSuggestion({ owner, repo, issue_number, suggestion_id })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/suggestions/{suggestion_id}/dismiss
scope: issues
type: API method
---

# Dismiss an issue suggestion

Dismisses a pending suggestion on an issue. Transitions the suggestion to `dismissed` without applying any change or creating a timeline event.

Requires triage access to the repository. This endpoint only supports issues, not pull requests.

```js
octokit.rest.issues.dismissSuggestion({
  owner,
  repo,
  issue_number,
  suggestion_id,
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
<tr><td>suggestion_id</td><td>yes</td><td>

The unique identifier of the suggestion.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issues#dismiss-an-issue-suggestion).
