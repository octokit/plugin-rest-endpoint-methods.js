---
name: Get GitHub Advanced Security active committers for an organization
example: octokit.rest.billing.getGithubAdvancedSecurityBillingOrg({ org })
route: GET /orgs/{org}/settings/billing/advanced-security
scope: billing
type: API method
---

# Get GitHub Advanced Security active committers for an organization

Gets the GitHub Advanced Security active committers for an organization per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.

If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.

The total number of repositories with committer information is tracked by the `total_count` field.

```js
octokit.rest.billing.getGithubAdvancedSecurityBillingOrg({
  org,
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
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization).
