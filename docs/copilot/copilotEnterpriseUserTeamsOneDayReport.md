---

name: Get Copilot enterprise user-teams report for a specific day
example: octokit.rest.copilot.copilotEnterpriseUserTeamsOneDayReport({ enterprise, day })
route: GET /enterprises/{enterprise}/copilot/metrics/reports/user-teams-1-day
scope: copilot
type: API method
---

# Get Copilot enterprise user-teams report for a specific day

Use this endpoint to retrieve download links for the Copilot enterprise user-teams report for a specific day. The report provides user-team join data for Copilot across the enterprise, with one entry per user-team pair.

The report contains user-team membership data for the specified day, enabling consumers to join with the existing enterprise user reports to compute team-level usage metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.

The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed.

Enterprise owners, billing managers, and authorized users with fine-grained "View Enterprise Copilot Metrics" permission can retrieve Copilot metrics reports for the enterprise. OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.

```js
octokit.rest.copilot.copilotEnterpriseUserTeamsOneDayReport({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics#get-copilot-enterprise-user-teams-report-for-a-specific-day).
