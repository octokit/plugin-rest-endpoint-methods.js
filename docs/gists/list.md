---
name: List gists for the authenticated user
example: octokit.rest.gists.list()
route: GET /gists
scope: gists
type: API method
---

# List gists for the authenticated user

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

```js
octokit.rest.gists.list();
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/gists#list-gists-for-the-authenticated-user).
