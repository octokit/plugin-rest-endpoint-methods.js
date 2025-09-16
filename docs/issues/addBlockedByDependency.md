---
name: Add a dependency an issue is blocked by
example: octokit.rest.issues.addBlockedByDependency({ owner, repo, issue_number, issue_id })
route: POST /repos/{owner}/{repo}/issues/{issue_number}/dependencies/blocked_by
scope: issues
type: API method
---

# Add a dependency an issue is blocked by

You can use the REST API to add a 'blocked by' relationship to an issue.

Creating content too quickly using this endpoint may result in secondary rate limiting.
For more information, see [Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)
and [Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api).

This endpoint supports the following custom media types. For more information, see [Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types).

- **`application/vnd.github.raw+json`**: Returns the raw Markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the Markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's Markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.issues.addBlockedByDependency({
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

The id of the issue that blocks the current issue

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issue-dependencies#add-a-dependency-an-issue-is-blocked-by).
