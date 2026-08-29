---

name: Get all budgets for an organization
example: octokit.rest.billing.getAllBudgetsOrg({ org })
route: GET /organizations/{org}/settings/billing/budgets
scope: billing
type: API method
---

# Get all budgets for an organization

Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.
Each page returns up to 100 budgets.

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
<tr><td>page</td><td>no</td><td>

The page number of the results to fetch.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>scope</td><td>no</td><td>

Filter budgets by scope type.

- `organization`: Budgets scoped to the organization.
- `repository`: Budgets scoped to a repository.
- `multi_user_customer`: Universal budgets that apply to all users in the organization.
- `user`: Budgets scoped to an individual user.

</td></tr>
<tr><td>user</td><td>no</td><td>

Filter consumed amount details for budgets by the specified user login.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/budgets#get-all-budgets-for-an-organization).
