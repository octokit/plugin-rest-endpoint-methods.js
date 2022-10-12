---
name: List subscriptions for the authenticated user
example: octokit.rest.apps.listSubscriptionsForAuthenticatedUser()
route: GET /user/marketplace_purchases
scope: apps
type: API method
---

# List subscriptions for the authenticated user

Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/).

```js
octokit.rest.apps.listSubscriptionsForAuthenticatedUser();
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

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-subscriptions-for-the-authenticated-user).
