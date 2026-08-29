---

name: Get Copilot organization user-teams report for a specific day
example: octokit.rest.copilot.copilotOrganizationUserTeamsOneDayReport({ org, day })
route: GET /orgs/{org}/copilot/metrics/reports/user-teams-1-day
scope: copilot
type: API method
---

# Get Copilot organization user-teams report for a specific day

Use this endpoint to retrieve download links for the Copilot organization user-teams report for a specific day. The report provides user-team join data for Copilot across the organization, with one entry per user-team pair.

The report contains user-team membership data for the specified day, enabling consumers to join with the existing organization user reports to compute team-level usage metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.

The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed.

Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).

```js
octokit.rest.copilot.copilotOrganizationUserTeamsOneDayReport({
  org,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>day</td><td>yes</td><td>

The day to request data for, in `YYYY-MM-DD` format.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics#get-copilot-organization-user-teams-report-for-a-specific-day).
