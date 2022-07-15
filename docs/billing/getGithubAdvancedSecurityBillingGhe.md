---
name: Get GitHub Advanced Security active committers for an enterprise
example: octokit.rest.billing.getGithubAdvancedSecurityBillingGhe({ enterprise })
route: GET /enterprises/{enterprise}/settings/billing/advanced-security
scope: billing
type: API method
---

# Get GitHub Advanced Security active committers for an enterprise

Gets the GitHub Advanced Security active committers for an enterprise per repository.

Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.

The total number of repositories with committer information is tracked by the `total_count` field.

```js
octokit.rest.billing.getGithubAdvancedSecurityBillingGhe({
  enterprise,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise).
