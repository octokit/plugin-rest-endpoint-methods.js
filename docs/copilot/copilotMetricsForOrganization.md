---
name: Get Copilot metrics for an organization
example: octokit.rest.copilot.copilotMetricsForOrganization({ org })
route: GET /orgs/{org}/copilot/metrics
scope: copilot
type: API method
---

# Get Copilot metrics for an organization

Use this endpoint to see a breakdown of aggregated metrics for various GitHub Copilot features. See the response schema tab for detailed metrics definitions.

> [!NOTE]
> This endpoint will only return results for a given day if the organization contained **five or more members with active Copilot licenses** on that day, as evaluated at the end of that day.

The response contains metrics for up to 28 days prior. Metrics are processed once per day for the previous day,
and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,
they must have telemetry enabled in their IDE.

To access this endpoint, the Copilot Metrics API access policy must be enabled for the organization.
Only organization owners and owners and billing managers of the parent enterprise can view Copilot metrics.

OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.

```js
octokit.rest.copilot.copilotMetricsForOrganization({
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
<tr><td>since</td><td>no</td><td>

Show usage metrics since this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`). Maximum value is 28 days ago.

</td></tr>
<tr><td>until</td><td>no</td><td>

Show usage metrics until this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`) and should not preceed the `since` date if it is passed.

</td></tr>
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of days of metrics to display per page (max 28). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-metrics#get-copilot-metrics-for-an-organization).
