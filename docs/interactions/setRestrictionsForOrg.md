---
name: Set interaction restrictions for an organization
example: octokit.rest.interactions.setRestrictionsForOrg({ org, limit })
route: PUT /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Set interaction restrictions for an organization

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

```js
octokit.rest.interactions.setRestrictionsForOrg({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>limit</td><td>yes</td><td>

The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.

</td></tr>
<tr><td>expiry</td><td>no</td><td>

The duration of the interaction restriction. Default: `one_day`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/orgs#set-interaction-restrictions-for-an-organization).
