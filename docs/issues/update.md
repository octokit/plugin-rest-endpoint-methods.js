---

name: Update an issue
example: octokit.rest.issues.update({ owner, repo, issue_number, issue_field_values[].field_id, issue_field_values[].value })
route: PATCH /repos/{owner}/{repo}/issues/{issue_number}
scope: issues
type: API method
---

# Update an issue

Issue owners and users with push access or Triage role can edit an issue.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.issues.update({
        owner,
repo,
issue_number,
issue_field_values[].field_id,
issue_field_values[].value
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
<tr><td>title</td><td>no</td><td>

The title of the issue.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the issue.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Username to assign to this issue. **This field is closing down.**

</td></tr>
<tr><td>state</td><td>no</td><td>

The open or closed state of the issue.

</td></tr>
<tr><td>state_reason</td><td>no</td><td>

The reason for the state change. Ignored unless `state` is changed.

</td></tr>
<tr><td>duplicate_issue_id</td><td>no</td><td>

The ID of the issue to mark as the canonical duplicate when `state_reason` is `duplicate`. The issue must exist and be accessible to the authenticated user. Ignored when `state_reason` is not `duplicate`.

</td></tr>
<tr><td>milestone</td><td>no</td><td>

</td></tr>
<tr><td>labels</td><td>no</td><td>

Labels to associate with this issue. Pass one or more labels to _replace_ the set of labels on this issue. Send an empty array (`[]`) to clear all labels from the issue. Only users with push access can set labels for issues. Without push access to the repository, label changes are silently dropped.

</td></tr>
<tr><td>assignees</td><td>no</td><td>

Usernames to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this issue. Send an empty array (`[]`) to clear all assignees from the issue. Only users with push access can set assignees for new issues. Without push access to the repository, assignee changes are silently dropped.

</td></tr>
<tr><td>issue_field_values</td><td>no</td><td>

An array of issue field values to set on this issue. Each field value must include the field ID and the value to set. Only users with push access can set field values for issues

</td></tr>
<tr><td>issue_field_values[].field_id</td><td>yes</td><td>

The ID of the issue field to set

</td></tr>
<tr><td>issue_field_values[].value</td><td>yes</td><td>

The value to set for the field. For multi-select fields, provide an array of option names.

</td></tr>
<tr><td>issue_field_values[].rationale</td><td>no</td><td>

Optional reasoning for setting this field value.

</td></tr>
<tr><td>issue_field_values[].suggest</td><td>no</td><td>

If `true`, the change is stored as a pending suggestion for human review rather than applied directly.

</td></tr>
<tr><td>issue_field_values[].confidence</td><td>no</td><td>

The confidence level for this field value choice.

</td></tr>
<tr><td>type</td><td>no</td><td>

The issue type to associate with this issue. Only users with push access can set the type for issues. Without push access to the repository, type changes are silently dropped.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issues#update-an-issue).
