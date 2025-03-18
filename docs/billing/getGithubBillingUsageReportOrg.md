---
name: Get billing usage report for an organization
example: octokit.rest.billing.getGithubBillingUsageReportOrg({ org })
route: GET /organizations/{org}/settings/billing/usage
scope: billing
type: API method
---

# Get billing usage report for an organization

Gets a report of the total usage for an organization. To use this endpoint, you must be an administrator of an organization within an enterprise or an organization account.

**Note:** This endpoint is only available to organizations with access to the enhanced billing platform. For more information, see "[About the enhanced billing platform](https://docs.github.com/billing/using-the-new-billing-platform)."

```js
octokit.rest.billing.getGithubBillingUsageReportOrg({
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

If specified, only return results for a single month. The value of `month` is an integer between `1` and `12`. If no year is specified the default `year` is used.

</td></tr>
<tr><td>day</td><td>no</td><td>

If specified, only return results for a single day. The value of `day` is an integer between `1` and `31`. If no `year` or `month` is specified, the default `year` and `month` are used.

</td></tr>
<tr><td>hour</td><td>no</td><td>

If specified, only return results for a single hour. The value of `hour` is an integer between `0` and `23`. If no `year`, `month`, or `day` is specified, the default `year`, `month`, and `day` are used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/enhanced-billing#get-billing-usage-report-for-an-organization).
