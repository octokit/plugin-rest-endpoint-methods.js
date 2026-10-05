---

name: Delete an issue field value from an issue
example: octokit.rest.issues.deleteIssueFieldValue({ owner, repo, issue_number, issue_field_id })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/issue-field-values/{issue_field_id}
scope: issues
type: API method
---

# Delete an issue field value from an issue

Remove a specific custom field value from an issue.

Only users with push access to the repository can delete issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.

If the specified field does not have a value set on the issue, this operation will return a `404` error.

This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"
and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```js
octokit.rest.issues.deleteIssueFieldValue({
  owner,
  repo,
  issue_number,
  issue_field_id,
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
<tr><td>issue_field_id</td><td>yes</td><td>

The unique identifier of the issue field.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issue-field-values#delete-an-issue-field-value-from-an-issue).
