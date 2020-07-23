---
name: Get shared storage billing for a user
example: octokit.billing.getSharedStorageBillingUser({ username })
route: GET /users/{username}/settings/billing/shared-storage
scope: billing
type: API method
---

# Get shared storage billing for a user

**Warning:** The Billing API is currently in public beta and subject to change.

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.

```js
octokit.billing.getSharedStorageBillingUser({
  username,
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
    <tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/billing/#get-shared-storage-billing-for-a-user).
