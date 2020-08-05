---
name: List self-hosted runner groups for an organization
example: octokit.actions.listSelfHostedRunnerGroupsForOrg({ org })
route: GET /orgs/{org}/actions/runner-groups
scope: actions
type: API method
---

# List self-hosted runner groups for an organization

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.listSelfHostedRunnerGroupsForOrg({
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
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#list-self-hosted-runner-groups-for-an-organization).
