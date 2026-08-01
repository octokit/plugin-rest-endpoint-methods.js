---
name: Get all budgets for an organization
example: octokit.rest.billing.getAllBudgetsOrg({ org })
route: GET /organizations/{org}/settings/billing/budgets
scope: billing
type: API method
---

# Get all budgets for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.

```js
octokit.rest.billing.getAllBudgetsOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/budgets#get-all-budgets-for-an-organization).
