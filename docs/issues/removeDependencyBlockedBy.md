---
name: Remove dependency an issue is blocked by
example: octokit.rest.issues.removeDependencyBlockedBy({ owner, repo, issue_number, issue_id })
route: DELETE /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by/{issue_id}
scope: issues
type: API method
---

# Remove dependency an issue is blocked by

You can use the REST API to remove a dependency that an issue is blocked by.

Removing content too quickly using this endpoint may result in secondary rate limiting.
For more information, see [Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)
and [Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api).

This endpoint supports the following custom media types. For more information, see [Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types).

- **`application/vnd.github.raw+json`**: Returns the raw Markdown body. Response will include `body`. This is the default if you do not pass a specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the Markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's Markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.issues.removeDependencyBlockedBy({
  owner,
  repo,
  issue_number,
  issue_id,
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
<tr><td>issue_id</td><td>yes</td><td>

The id of the blocking issue to remove as a dependency

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issue-dependencies#remove-dependency-an-issue-is-blocked-by).
