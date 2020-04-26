---
name: Update an issue
example: octokit.issues.update({ owner, repo, issue_number })
route: PATCH /repos/{owner}/{repo}/issues/{issue_number}
scope: issues
type: API method
---

# Update an issue

Issue owners and users with push access can edit an issue.

```js
octokit.issues.update({
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

issue_number parameter

</td></tr>
<tr><td>title</td><td>no</td><td>

The title of the issue.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the issue.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Login for the user that this issue should be assigned to. **This field is deprecated.**

</td></tr>
<tr><td>state</td><td>no</td><td>

State of the issue. Either `open` or `closed`.

</td></tr>
<tr><td>milestone</td><td>no</td><td>

The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._

</td></tr>
<tr><td>labels</td><td>no</td><td>

Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/issues/#update-an-issue).
