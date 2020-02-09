# List user repositories

Lists public repositories for the specified user.

```js
octokit.repos.listForUser(username);
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
    <tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
<tr><td>type</td><td>no</td><td>

Can be one of `all`, `owner`, `member`.

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

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
