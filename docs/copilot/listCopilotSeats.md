---
name: List all Copilot for Business seat assignments for an organization
example: octokit.rest.copilot.listCopilotSeats({ org })
route: GET /orgs/{org}/copilot/billing/seats
scope: copilot
type: API method
---

# List all Copilot for Business seat assignments for an organization

**Note**: This endpoint is in beta and is subject to change.

Lists all Copilot for Business seat assignments for an organization that are currently being billed (either active or pending cancellation at the start of the next billing cycle).

Only organization owners and members with admin permissions can configure and view details about the organization's Copilot for Business subscription. You must
authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.

```js
octokit.rest.copilot.listCopilotSeats({
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
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-for-business#list-all-copilot-for-business-seat-assignments-for-an-organization).
