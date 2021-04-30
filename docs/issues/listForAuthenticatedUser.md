---
name: List user account issues assigned to the authenticated user
example: octokit.rest.issues.listForAuthenticatedUser()
route: GET /user/issues
scope: issues
type: API method
---

# List user account issues assigned to the authenticated user

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.

```js
octokit.rest.issues.listForAuthenticatedUser();
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
    <tr><td>filter</td><td>no</td><td>

Indicates which sorts of issues to return. Can be one of:  
\* `assigned`: Issues assigned to you  
\* `created`: Issues created by you  
\* `mentioned`: Issues mentioning you  
\* `subscribed`: Issues you're subscribed to updates for  
\* `all`: All issues the authenticated user can see, regardless of participation or creation

</td></tr>
<tr><td>state</td><td>no</td><td>

Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.

</td></tr>
<tr><td>labels</td><td>no</td><td>

A list of comma separated label names. Example: `bug,ui,@high`

</td></tr>
<tr><td>sort</td><td>no</td><td>

What to sort results by. Can be either `created`, `updated`, `comments`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

One of `asc` (ascending) or `desc` (descending).

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user).
