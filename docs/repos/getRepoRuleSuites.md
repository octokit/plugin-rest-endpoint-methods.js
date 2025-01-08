---
name: List repository rule suites
example: octokit.rest.repos.getRepoRuleSuites({ owner, repo })
route: GET /repos/{owner}/{repo}/rulesets/rule-suites
scope: repos
type: API method
---

# List repository rule suites

Lists suites of rule evaluations at the repository level.
For more information, see "[Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."

```js
octokit.rest.repos.getRepoRuleSuites({
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
<tr><td>ref</td><td>no</td><td>

The name of the ref. Cannot contain wildcard characters. Optionally prefix with `refs/heads/` to limit to branches or `refs/tags/` to limit to tags. Omit the prefix to search across all refs. When specified, only rule evaluations triggered for this ref will be returned.

</td></tr>
<tr><td>time_period</td><td>no</td><td>

The time period to filter by.

For example, `day` will filter for rule suites that occurred in the past 24 hours, and `week` will filter for insights that occurred in the past 7 days (168 hours).

</td></tr>
<tr><td>actor_name</td><td>no</td><td>

The handle for the GitHub user account to filter on. When specified, only rule evaluations triggered by this actor will be returned.

</td></tr>
<tr><td>rule_suite_result</td><td>no</td><td>

The rule results to filter on. When specified, only suites with this result will be returned.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites).
