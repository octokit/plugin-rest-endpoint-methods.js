---
name: Set interaction restrictions for an organization
example: octokit.interactions.setRestrictionsForOrg({ org, limit })
route: PUT /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Set interaction restrictions for an organization

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

```js
octokit.interactions.setRestrictionsForOrg({
  org,
  limit,
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
<tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. Can be one of: `existing_users`, `contributors_only`, `collaborators_only`.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Can be one of: `one_day`, `three_days`, `one_week`, `one_month`, `six_months`. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization).
