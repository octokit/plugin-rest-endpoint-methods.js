---

name: Get Copilot enterprise usage metrics for a specific day
example: octokit.rest.copilot.copilotEnterpriseOneDayUsageMetrics({ enterprise, day })
route: GET /enterprises/{enterprise}/copilot/metrics/reports/enterprise-1-day
scope: copilot
type: API method
---

# Get Copilot enterprise usage metrics for a specific day

Use this endpoint to retrieve download links for the Copilot enterprise usage metrics report for a specific day. The report provides comprehensive usage data for Copilot features across the enterprise.

The report contains aggregated metrics for the specified day, including usage statistics for various Copilot features, user engagement data, and feature adoption metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.

The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed. Reports are available starting from October 10, 2025, and historical data can be accessed for up to 1 year from the current date.

Enterprise owners, billing managers, and authorized users with fine-grained "View Enterprise Copilot Metrics" permission can retrieve Copilot metrics reports for the enterprise. OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.

```js
octokit.rest.copilot.copilotEnterpriseOneDayUsageMetrics({
  enterprise,
  day,
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

The slug version of the enterprise name.

</td></tr>
<tr><td>day</td><td>yes</td><td>

The day to request data for, in `YYYY-MM-DD` format.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics#get-copilot-enterprise-usage-metrics-for-a-specific-day).
