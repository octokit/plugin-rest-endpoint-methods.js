---
name: Replace all repository topics
example: octokit.rest.repos.replaceAllTopics({ owner, repo, names })
route: PUT /repos/{owner}/{repo}/topics
scope: repos
type: API method
---

# Replace all repository topics

```js
octokit.rest.repos.replaceAllTopics({
  owner,
  repo,
  names,
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
<tr><td>names</td><td>yes</td><td>

An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#replace-all-repository-topics).
