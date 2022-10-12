---
name: List reactions for an issue
example: octokit.rest.reactions.listForIssue({ owner, repo, issue_number })
route: GET /repos/{owner}/{repo}/issues/{issue_number}/reactions
scope: reactions
type: API method
---

# List reactions for an issue

List the reactions to an [issue](https://docs.github.com/enterprise-cloud@latest//rest/reference/issues).

```js
octokit.rest.reactions.listForIssue({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>issue_number</td><td>yes</td><td>

The number that identifies the issue.

</td></tr>
<tr><td>content</td><td>no</td><td>

Returns a single [reaction type](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#list-reactions-for-an-issue).
