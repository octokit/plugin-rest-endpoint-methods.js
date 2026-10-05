---

name: Get Copilot organization usage metrics
example: octokit.rest.copilot.copilotOrganizationUsageMetrics({ org })
route: GET /orgs/{org}/copilot/metrics/reports/organization-28-day/latest
scope: copilot
type: API method
---

# Get Copilot organization usage metrics

Use this endpoint to retrieve download links for the latest 28-day organization Copilot usage metrics report. The report provides comprehensive usage data for Copilot features across the organization.

The report contains aggregated metrics for the previous 28 days, including usage statistics for various Copilot features, user engagement data, and feature adoption metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.

The response includes download links to the report files, along with the specific date range covered by the report. The report covers a complete 28-day period ending on the most recent day for which data has been processed.

Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).

```js
octokit.rest.copilot.copilotOrganizationUsageMetrics({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics#get-copilot-organization-usage-metrics).
