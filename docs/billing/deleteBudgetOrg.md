---
name: Delete a budget for an organization
example: octokit.rest.billing.deleteBudgetOrg({ org, budget_id })
route: DELETE /organizations/{org}/settings/billing/budgets/{budget_id}
scope: billing
type: API method
---

# Delete a budget for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Deletes a budget by ID for an organization. The authenticated user must be an organization admin or billing manager.

```js
octokit.rest.billing.deleteBudgetOrg({
  org,
  budget_id,
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
<tr><td>budget_id</td><td>yes</td><td>

The ID corresponding to the budget.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/budgets#delete-a-budget-for-an-organization).
