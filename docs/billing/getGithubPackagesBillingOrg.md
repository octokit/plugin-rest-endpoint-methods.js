---
name: Get GitHub Packages billing for an organization
example: octokit.rest.billing.getGithubPackagesBillingOrg({ org })
route: GET /orgs/{org}/settings/billing/packages
scope: billing
type: API method
---

# Get GitHub Packages billing for an organization

Gets the free and paid storage usued for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `repo` or `admin:org` scope.

```js
octokit.rest.billing.getGithubPackagesBillingOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization).
