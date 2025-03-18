---
name: Get repository ruleset version
example: octokit.rest.repos.getRepoRulesetVersion({ owner, repo, ruleset_id, version_id })
route: GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}
scope: repos
type: API method
---

# Get repository ruleset version

Get a version of a repository ruleset.

```js
octokit.rest.repos.getRepoRulesetVersion({
  owner,
  repo,
  ruleset_id,
  version_id,
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
<tr><td>version_id</td><td>yes</td><td>

The ID of the version

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rules#get-repository-ruleset-version).
