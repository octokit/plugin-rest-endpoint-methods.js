---
name: Get a repository ruleset
example: octokit.rest.repos.getRepoRuleset({ owner, repo, ruleset_id })
route: GET /repos/{owner}/{repo}/rulesets/{ruleset_id}
scope: repos
type: API method
---

# Get a repository ruleset

Get a ruleset for a repository.

**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user
making the API request has write access to the ruleset.

```js
octokit.rest.repos.getRepoRuleset({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
<tr><td>includes_parents</td><td>no</td><td>

Include rulesets configured at higher levels that apply to this repository

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rules#get-a-repository-ruleset).
