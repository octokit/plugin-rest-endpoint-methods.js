---

name: Approve an issue suggestion
example: octokit.rest.issues.approveSuggestion({ owner, repo, issue_number, suggestion_id })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/suggestions/{suggestion_id}/approve
scope: issues
type: API method
---

# Approve an issue suggestion

Approves a pending suggestion on an issue. Applies the proposed change (creating the corresponding timeline event), transitions the suggestion to `approved`, and dismisses any competing pending suggestions for the same change.

Requires triage access to the repository. Approving a suggestion also requires permission to perform the change it applies (for example, setting the issue type, adding a label or assignee, or closing the issue); this only affects fine-grained access tokens and GitHub Apps whose permissions are narrower than the triage role. This endpoint only supports issues, not pull requests.

```js
octokit.rest.issues.approveSuggestion({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issues#approve-an-issue-suggestion).
