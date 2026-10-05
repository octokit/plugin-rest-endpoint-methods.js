---

name: Get Copilot users usage metrics for a specific day
example: octokit.rest.copilot.copilotUsersOneDayUsageMetrics({ enterprise, day })
route: GET /enterprises/{enterprise}/copilot/metrics/reports/users-1-day
scope: copilot
type: API method
---

# Get Copilot users usage metrics for a specific day

Use this endpoint to retrieve download links for the Copilot user usage metrics report for a specific day. The report provides detailed user-level usage data and engagement metrics for Copilot features across the enterprise.

The report contains user-specific metrics for the specified day, including individual user engagement statistics, feature usage patterns, and adoption metrics broken down by user. This report allows authorized users to analyze Copilot usage at the user level to understand adoption patterns and identify opportunities for increased engagement.

Reports are generated daily and made available for download through signed URLs with a limited expiration time. The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed. Reports are available starting from October 10, 2025, and historical data can be accessed for up to 1 year from the current date.

Enterprise owners, billing managers, and authorized users with fine-grained "View Enterprise Copilot Metrics" permission can retrieve Copilot metrics reports for the enterprise. OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.

```js
octokit.rest.copilot.copilotUsersOneDayUsageMetrics({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics#get-copilot-users-usage-metrics-for-a-specific-day).
