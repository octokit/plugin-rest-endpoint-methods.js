---
name: List subscriptions for the authenticated user (stubbed)
example: octokit.apps.listMarketplacePurchasesForAuthenticatedUserStubbed()
route: GET /user/marketplace_purchases/stubbed
scope: apps
type: API method
---

# List subscriptions for the authenticated user (stubbed)

**Deprecated:** This method has been renamed to apps.listSubscriptionsForAuthenticatedUserStubbed

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).

```js
octokit.apps.listMarketplacePurchasesForAuthenticatedUserStubbed();
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
    <tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/marketplace/#list-subscriptions-for-the-authenticated-user-stubbed).
