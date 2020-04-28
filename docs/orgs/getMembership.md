---
name: Get organization membership
example: octokit.orgs.getMembership({ org, username })
route: GET /orgs/{org}/memberships/{username}
scope: orgs
type: API method
---

# Get organization membership

In order to get a user's membership with an organization, the authenticated user must be an organization member.

```js
octokit.orgs.getMembership({
  org,
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
    <tr><td>org</td><td>yes</td><td>

org parameter

</td></tr>
<tr><td>username</td><td>yes</td><td>

username parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#get-organization-membership).
