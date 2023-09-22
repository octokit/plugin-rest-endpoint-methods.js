---
name: List repository issues
example: octokit.rest.issues.listForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/issues
scope: issues
type: API method
---

# List repository issues

List issues in a repository. Only open issues will be listed.

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/pulls/pulls#list-pull-requests)" endpoint.

```js
octokit.rest.issues.listForRepo({
  owner,
  repo,
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
<tr><td>milestone</td><td>no</td><td>

If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return.

</td></tr>
<tr><td>assignee</td><td>no</td><td>

Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.

</td></tr>
<tr><td>creator</td><td>no</td><td>

The user that created the issue.

</td></tr>
<tr><td>mentioned</td><td>no</td><td>

A user that's mentioned in the issue.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The direction to sort the results by.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/issues/issues#list-repository-issues).
