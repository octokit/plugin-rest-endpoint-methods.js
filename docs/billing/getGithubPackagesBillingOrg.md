---
name: Get GitHub Packages billing for an organization
example: octokit.rest.billing.getGithubPackagesBillingOrg({ org })
route: GET /orgs/{org}/settings/billing/packages
scope: billing
type: API method
---

# Get GitHub Packages billing for an organization

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

OAuth app tokens and personal access tokens (classic) need the `repo` or `admin:org` scope to use this endpoint.

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

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/billing#get-github-packages-billing-for-an-organization).
