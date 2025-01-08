---
name: Create a commit comment
example: octokit.rest.repos.createCommitComment({ owner, repo, commit_sha, body })
route: POST /repos/{owner}/{repo}/commits/{commit_sha}/comments
scope: repos
type: API method
---

# Create a commit comment

Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```js
octokit.rest.repos.createCommitComment({
  owner,
  repo,
  commit_sha,
  body,
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
<tr><td>commit_sha</td><td>yes</td><td>

The SHA of the commit.

</td></tr>
<tr><td>body</td><td>yes</td><td>

The contents of the comment.

</td></tr>
<tr><td>path</td><td>no</td><td>

Relative path of the file to comment on.

</td></tr>
<tr><td>position</td><td>no</td><td>

Line index in the diff to comment on.

</td></tr>
<tr><td>line</td><td>no</td><td>

**Closing down notice**. Use **position** parameter instead. Line number in the file to comment on.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/commits/comments#create-a-commit-comment).
