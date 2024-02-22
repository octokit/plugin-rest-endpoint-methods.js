---
name: Update a pull request
example: octokit.rest.pulls.update({ owner, repo, pull_number })
route: PATCH /repos/{owner}/{repo}/pulls/{pull_number}
scope: pulls
type: API method
---

# Update a pull request

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."

- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.
- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.
- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.
- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.
- **`application/vnd.github.diff`**: For more information, see "[git-diff](https://git-scm.com/docs/git-diff)" in the Git documentation. If a diff is corrupt, contact us through the [GitHub Support portal](https://support.github.com/). Include the repository name and pull request ID in your message.

```js
octokit.rest.pulls.update({
  owner,
  repo,
  pull_number,
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
<tr><td>pull_number</td><td>yes</td><td>

The number that identifies the pull request.

</td></tr>
<tr><td>title</td><td>no</td><td>

The title of the pull request.

</td></tr>
<tr><td>body</td><td>no</td><td>

The contents of the pull request.

</td></tr>
<tr><td>state</td><td>no</td><td>

State of this Pull Request. Either `open` or `closed`.

</td></tr>
<tr><td>base</td><td>no</td><td>

The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.

</td></tr>
<tr><td>maintainer_can_modify</td><td>no</td><td>

Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/pulls/pulls#update-a-pull-request).
