---
name: Get GitHub Enterprise Server statistics
example: octokit.rest.enterpriseAdmin.getServerStatistics({ enterprise_or_org })
route: GET /enterprise-installation/{enterprise_or_org}/server-statistics
scope: enterpriseAdmin
type: API method
---

# Get GitHub Enterprise Server statistics

Returns aggregate usage metrics for your GitHub Enterprise Server 3.5+ instance for a specified time period up to 365 days.

To use this endpoint, your GitHub Enterprise Server instance must be connected to GitHub Enterprise Cloud using GitHub Connect. You must enable Server Statistics, and for the API request provide your enterprise account name or organization name connected to the GitHub Enterprise Server. For more information, see "[Enabling Server Statistics for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" in the GitHub Enterprise Server documentation.

You'll need to use a personal access token:

- If you connected your GitHub Enterprise Server to an enterprise account and enabled Server Statistics, you'll need a personal access token with the `read:enterprise` permission.
- If you connected your GitHub Enterprise Server to an organization account and enabled Server Statistics, you'll need a personal access token with the `read:org` permission.

For more information on creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

```js
octokit.rest.enterpriseAdmin.getServerStatistics({
  enterprise_or_org,
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
    <tr><td>enterprise_or_org</td><td>yes</td><td>

The slug version of the enterprise name or the login of an organization.

</td></tr>
<tr><td>date_start</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.

</td></tr>
<tr><td>date_end</td><td>no</td><td>

A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/enterprise-admin#get-github-enterprise-server-statistics).
