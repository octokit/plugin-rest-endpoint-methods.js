---
name: Get all repository topics
example: octokit.repos.listTopics({ owner, repo })
route: GET /repos/{owner}/{repo}/topics
scope: repos
type: API method
---

# Get all repository topics

**Deprecated:** This method has been renamed to repos.getAllTopics

```js
octokit.repos.listTopics({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/#get-all-repository-topics).
