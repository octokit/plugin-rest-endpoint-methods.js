---
name: Add sub-issue
example: octokit.rest.issues.addSubIssue({ owner, repo, issue_number, sub_issue_id })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues
scope: issues
type: API method
---

# Add sub-issue

You can use the REST API to add sub-issues to issues.

Creating content too quickly using this endpoint may result in secondary rate limiting.
For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"
and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.issues.addSubIssue({
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

The sub-issue to add

</td></tr>
<tr><td>replace_parent</td><td>no</td><td>

Option that, when true, instructs the operation to replace the sub-issues current parent issue

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/sub-issues#add-sub-issue).
