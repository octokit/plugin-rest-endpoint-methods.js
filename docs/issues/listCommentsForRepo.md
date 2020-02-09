# List comments in a repository

By default, Issue Comments are ordered by ascending ID.

```js
octokit.issues.listCommentsForRepo(owner, repo);
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>sort</td><td>no</td><td>

Either `created` or `updated`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

Either `asc` or `desc`. Ignored without the `sort` parameter.

</td></tr>
<tr><td>since</td><td>no</td><td>

Only comments updated at or after this time are returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
