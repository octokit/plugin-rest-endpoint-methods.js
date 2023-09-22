---
name: List repositories for the authenticated user
example: octokit.rest.repos.listForAuthenticatedUser()
route: GET /user/repos
scope: repos
type: API method
---

# List repositories for the authenticated user

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

```js
octokit.rest.repos.listForAuthenticatedUser();
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
    <tr><td>visibility</td><td>no</td><td>

Limit results to repositories with the specified visibility.

</td></tr>
<tr><td>affiliation</td><td>no</td><td>

Comma-separated list of values. Can include:

- `owner`: Repositories that are owned by the authenticated user.
- `collaborator`: Repositories that the user has been added to as a collaborator.
- `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.

</td></tr>
<tr><td>type</td><td>no</td><td>

Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.

</td></tr>
<tr><td>sort</td><td>no</td><td>

The property to sort the results by.

</td></tr>
<tr><td>direction</td><td>no</td><td>

The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
<tr><td>before</td><td>no</td><td>

Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#list-repositories-for-the-authenticated-user).
