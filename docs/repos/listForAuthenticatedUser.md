---
name: List repositories for the authenticated user
example: octokit.repos.listForAuthenticatedUser()
route: GET /user/repos
scope: repos
type: API method
---

# List repositories for the authenticated user

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

```js
octokit.repos.listForAuthenticatedUser();
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

Can be one of `all`, `public`, or `private`.

</td></tr>
<tr><td>affiliation</td><td>no</td><td>

Comma-separated list of values. Can include:  
\* `owner`: Repositories that are owned by the authenticated user.  
\* `collaborator`: Repositories that the user has been added to as a collaborator.  
\* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.

</td></tr>
<tr><td>type</td><td>no</td><td>

Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`

Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.

</td></tr>
<tr><td>sort</td><td>no</td><td>

Can be one of `created`, `updated`, `pushed`, `full_name`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/#list-repositories-for-the-authenticated-user).
