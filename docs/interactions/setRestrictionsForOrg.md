---
name: Set interaction restrictions for an organization
example: octokit.interactions.setRestrictionsForOrg({ org, limit })
route: PUT /orgs/{org}/interaction-limits
scope: interactions
type: API method
---

# Set interaction restrictions for an organization

Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.

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

Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization).
