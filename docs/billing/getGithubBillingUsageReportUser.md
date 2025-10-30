---
name: Get billing usage report for a user
example: octokit.rest.billing.getGithubBillingUsageReportUser({ username })
route: GET /users/{username}/settings/billing/usage
scope: billing
type: API method
---

# Get billing usage report for a user

Gets a report of the total usage for a user.

**Note:** This endpoint is only available to users with access to the enhanced billing platform.

```js
octokit.rest.billing.getGithubBillingUsageReportUser({
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

The handle for the GitHub user account.

</td></tr>
<tr><td>year</td><td>no</td><td>

If specified, only return results for a single year. The value of `year` is an integer with four digits representing a year. For example, `2025`. Default value is the current year.

</td></tr>
<tr><td>month</td><td>no</td><td>

If specified, only return results for a single month. The value of `month` is an integer between `1` and `12`. If no year is specified the default `year` is used.

</td></tr>
<tr><td>day</td><td>no</td><td>

If specified, only return results for a single day. The value of `day` is an integer between `1` and `31`. If no `year` or `month` is specified, the default `year` and `month` are used.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/billing/enhanced-billing#get-billing-usage-report-for-a-user).
