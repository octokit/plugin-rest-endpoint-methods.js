---
name: Get your organization membership
example: octokit.orgs.getMembershipForAuthenticatedUser({ org })
route: GET /user/memberships/orgs/{org}
scope: orgs
type: API method
---

# Get your organization membership

```js
octokit.orgs.getMembershipForAuthenticatedUser({
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

org parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#get-your-organization-membership).
