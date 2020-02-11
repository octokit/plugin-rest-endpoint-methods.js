# Replace all topics for a repository

```js
octokit.repos.replaceTopics({
  owner,
  repo,
  names
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
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>names</td><td>yes</td><td>

An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
