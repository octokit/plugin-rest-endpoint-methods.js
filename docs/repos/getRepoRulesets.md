---
name: Get all repository rulesets
example: octokit.rest.repos.getRepoRulesets({ owner, repo })
route: GET /repos/{owner}/{repo}/rulesets
scope: repos
type: API method
---

# Get all repository rulesets

Get all the rulesets for a repository.

```js
octokit.rest.repos.getRepoRulesets({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>includes_parents</td><td>no</td><td>

Include rulesets configured at higher levels that apply to this repository

</td></tr>
<tr><td>targets</td><td>no</td><td>

A comma-separated list of rule targets to filter by.
If provided, only rulesets that apply to the specified targets will be returned.
For example, `branch,tag,push`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rules#get-all-repository-rulesets).
