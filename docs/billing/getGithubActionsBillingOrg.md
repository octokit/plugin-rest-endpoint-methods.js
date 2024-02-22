---
name: Get GitHub Actions billing for an organization
example: octokit.rest.billing.getGithubActionsBillingOrg({ org })
route: GET /orgs/{org}/settings/billing/actions
scope: billing
type: API method
---

# Get GitHub Actions billing for an organization

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

OAuth app tokens and personal access tokens (classic) need the `repo` or `admin:org` scope to use this endpoint.

```js
octokit.rest.billing.getGithubActionsBillingOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/billing#get-github-actions-billing-for-an-organization).
