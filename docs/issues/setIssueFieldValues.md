---

name: Set issue field values for an issue
example: octokit.rest.issues.setIssueFieldValues({ owner, repo, issue_number, issue_field_values[].field_id, issue_field_values[].value })
route: PUT /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values
scope: issues
type: API method
---

# Set issue field values for an issue

Set custom field values for an issue, replacing any existing values. You can set values for organization-level issue fields that have been defined for the repository's organization.

This endpoint supports the following field data types:

- **`text`**: String values for text fields
- **`single_select`**: Option names for single-select fields (must match an existing option name)
- **`number`**: Numeric values for number fields
- **`date`**: ISO 8601 date strings for date fields

This operation will replace all existing field values with the provided ones. If you want to add field values without replacing existing ones, use the `POST` endpoint instead.

Only users with push access to the repository can set issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.

This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"
and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```js
octokit.rest.issues.setIssueFieldValues({
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
<tr><td>issue_field_values</td><td>no</td><td>

An array of issue field values to set for this issue. Each field value must include the field ID and the value to set. All existing field values will be replaced.

</td></tr>
<tr><td>issue_field_values[].field_id</td><td>yes</td><td>

The ID of the issue field to set

</td></tr>
<tr><td>issue_field_values[].value</td><td>yes</td><td>

The value to set for the field. The type depends on the field's data type:

- For text fields: provide a string value
- For single_select fields: provide the option name as a string (must match an existing option)
- For number fields: provide a numeric value
- For date fields: provide an ISO 8601 date string

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issue-field-values#set-issue-field-values-for-an-issue).
