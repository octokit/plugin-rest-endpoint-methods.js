---
name: Get billing usage summary for a user
example: octokit.rest.billing.getGithubBillingUsageSummaryReportUser({ username })
route: GET /users/{username}/settings/billing/usage/summary
scope: billing
type: API method
---

# Get billing usage summary for a user

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets a summary report of usage for a user.

**Note:** Only data from the past 24 months is accessible via this endpoint.

```js
octokit.rest.billing.getGithubBillingUsageSummaryReportUser({
  username,
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
    <tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
<tr><td>year</td><td>no</td><td>

If specified, only return results for a single year. The value of `year` is an integer with four digits representing a year. For example, `2025`. Default value is the current year.

</td></tr>
<tr><td>month</td><td>no</td><td>

If specified, only return results for a single month. The value of `month` is an integer between `1` and `12`. Default value is the current month. If no year is specified the default `year` is used.

</td></tr>
<tr><td>day</td><td>no</td><td>

If specified, only return results for a single day. The value of `day` is an integer between `1` and `31`. If no `year` or `month` is specified, the default `year` and `month` are used.

</td></tr>
<tr><td>repository</td><td>no</td><td>

The repository name to query for usage in the format owner/repository.

</td></tr>
<tr><td>product</td><td>no</td><td>

The product name to query usage for. The name is not case sensitive.

</td></tr>
<tr><td>sku</td><td>no</td><td>

The SKU to query for usage.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/usage#get-billing-usage-summary-for-a-user).
