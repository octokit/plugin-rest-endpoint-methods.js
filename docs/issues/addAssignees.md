---
name: Add assignees to an issue
example: octokit.rest.issues.addAssignees({ owner, repo, issue_number })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/assignees
scope: issues
type: API method
---

# Add assignees to an issue

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

```js
octokit.rest.issues.addAssignees({
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
<tr><td>assignees</td><td>no</td><td>

Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/assignees#add-assignees-to-an-issue).
