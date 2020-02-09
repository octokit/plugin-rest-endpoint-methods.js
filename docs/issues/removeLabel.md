# Remove a label from an issue

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

```js
octokit.issues.removeLabel(owner, repo, issue_number, name);
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
<tr><td>name</td><td>yes</td><td>

name parameter

</td></tr>
<tr><td>number</td><td>no</td><td>

null

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
