---
name: Get shared storage billing for an organization
example: octokit.rest.billing.getSharedStorageBillingOrg({ org })
route: GET /orgs/{org}/settings/billing/shared-storage
scope: billing
type: API method
---

# Get shared storage billing for an organization

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

```js
octokit.rest.billing.getSharedStorageBillingOrg({
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

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization).
