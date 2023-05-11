---
name: Delete a repository ruleset
example: octokit.rest.repos.deleteRepoRuleset({ owner, repo, ruleset_id })
route: DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}
scope: repos
type: API method
---

# Delete a repository ruleset

Delete a ruleset for a repository.

```js
octokit.rest.repos.deleteRepoRuleset({
  owner,
  repo,
  ruleset_id,
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rules#delete-repository-ruleset).
