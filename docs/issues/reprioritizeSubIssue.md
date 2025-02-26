---
name: Reprioritize sub-issue
example: octokit.rest.issues.reprioritizeSubIssue({ owner, repo, issue_number, sub_issue_id })
route: PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority
scope: issues
type: API method
---

# Reprioritize sub-issue

You can use the REST API to reprioritize a sub-issue to a different position in the parent list.

```js
octokit.rest.issues.reprioritizeSubIssue({
  owner,
  repo,
  issue_number,
  sub_issue_id,
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
<tr><td>sub_issue_id</td><td>yes</td><td>

The id of the sub-issue to reprioritize

</td></tr>
<tr><td>after_id</td><td>no</td><td>

The id of the sub-issue to be prioritized after (either positional argument after OR before should be specified).

</td></tr>
<tr><td>before_id</td><td>no</td><td>

The id of the sub-issue to be prioritized before (either positional argument after OR before should be specified).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/sub-issues#reprioritize-sub-issue).
