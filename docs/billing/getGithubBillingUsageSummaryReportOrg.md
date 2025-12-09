---
name: Get billing usage summary for an organization
example: octokit.rest.billing.getGithubBillingUsageSummaryReportOrg({ org })
route: GET /organizations/{org}/settings/billing/usage/summary
scope: billing
type: API method
---

# Get billing usage summary for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets a summary report of usage for an organization. To use this endpoint, you must be an administrator of an organization within an enterprise or an organization account.

**Note:** Only data from the past 24 months is accessible via this endpoint.

```js
octokit.rest.billing.getGithubBillingUsageSummaryReportOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/usage#get-billing-usage-summary-for-an-organization).
