---
name: List accounts for a plan
example: octokit.apps.listAccountsForPlan({ plan_id })
route: GET /marketplace_listing/plans/{plan_id}/accounts
scope: apps
type: API method
---

# List accounts for a plan

Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.

```js
octokit.apps.listAccountsForPlan({
  plan_id,
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
    <tr><td>plan_id</td><td>yes</td><td>

plan_id parameter

</td></tr>
<tr><td>sort</td><td>no</td><td>

Sorts the GitHub accounts by the date they were created or last updated. Can be one of `created` or `updated`.

</td></tr>
<tr><td>direction</td><td>no</td><td>

To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/marketplace/#list-accounts-for-a-plan).
