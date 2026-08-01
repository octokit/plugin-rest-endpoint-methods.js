---
name: Update a budget for an organization
example: octokit.rest.billing.updateBudgetOrg({ org, budget_id })
route: PATCH /organizations/{org}/settings/billing/budgets/{budget_id}
scope: billing
type: API method
---

# Update a budget for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Updates an existing budget for an organization. The authenticated user must be an organization admin or billing manager.

```js
octokit.rest.billing.updateBudgetOrg({
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
<tr><td>budget_amount</td><td>no</td><td>

The budget amount in whole dollars. For license-based products, this represents the number of licenses.

</td></tr>
<tr><td>prevent_further_usage</td><td>no</td><td>

Whether to prevent additional spending once the budget is exceeded

</td></tr>
<tr><td>budget_alerting</td><td>no</td><td>

</td></tr>
<tr><td>budget_alerting.will_alert</td><td>no</td><td>

Whether alerts are enabled for this budget

</td></tr>
<tr><td>budget_alerting.alert_recipients</td><td>no</td><td>

Array of user login names who will receive alerts

</td></tr>
<tr><td>budget_scope</td><td>no</td><td>

The scope of the budget

</td></tr>
<tr><td>budget_entity_name</td><td>no</td><td>

The name of the entity to apply the budget to

</td></tr>
<tr><td>budget_type</td><td>no</td><td>

The type of pricing for the budget

</td></tr>
<tr><td>budget_product_sku</td><td>no</td><td>

A single product or SKU that will be covered in the budget

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/budgets#update-a-budget-for-an-organization).
