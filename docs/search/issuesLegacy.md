# Search issues

**This method is deprecated.**

Find issues by state and keyword.

```js
octokit.search.issuesLegacy({
  owner,
  repository,
  state,
  keyword
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

owner parameter

</td></tr>
<tr><td>repository</td><td>yes</td><td>

repository parameter

</td></tr>
<tr><td>state</td><td>yes</td><td>

Indicates the state of the issues to return. Can be either `open` or `closed`.

</td></tr>
<tr><td>keyword</td><td>yes</td><td>

The search term.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
