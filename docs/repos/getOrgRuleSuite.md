---
name: Get an organization rule suite
example: octokit.rest.repos.getOrgRuleSuite({ org, rule_suite_id })
route: GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}
scope: repos
type: API method
---

# Get an organization rule suite

Gets information about a suite of rule evaluations from within an organization.
For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."

```js
octokit.rest.repos.getOrgRuleSuite({
  org,
  rule_suite_id,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>rule_suite_id</td><td>yes</td><td>

The unique identifier of the rule suite result.
To get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)
for repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)
for organizations.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rule-suites#get-an-organization-rule-suite).
