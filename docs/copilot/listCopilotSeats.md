---
name: List all Copilot seat assignments for an organization
example: octokit.rest.copilot.listCopilotSeats({ org })
route: GET /orgs/{org}/copilot/billing/seats
scope: copilot
type: API method
---

# List all Copilot seat assignments for an organization

**Note**: This endpoint is in beta and is subject to change.

Lists all Copilot seat assignments for an organization that are currently being billed (either active or pending cancellation at the start of the next billing cycle).

Only organization owners can configure and view details about the organization's Copilot Business or Enterprise subscription.

OAuth app tokens and personal access tokens (classic) need the `manage_billing:copilot` scope to use this endpoint.

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

The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#list-all-copilot-seat-assignments-for-an-organization).
