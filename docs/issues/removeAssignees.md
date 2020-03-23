# Remove assignees from an issue

Removes one or more assignees from an issue.

This example removes two of three assignees, leaving the `octocat` assignee.

```js
octokit.issues.removeAssignees({
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
<tr><td>assignees</td><td>no</td><td>

Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
