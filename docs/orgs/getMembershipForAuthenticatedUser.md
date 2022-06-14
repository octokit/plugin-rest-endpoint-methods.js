---
name: Get an organization membership for the authenticated user
example: octokit.rest.orgs.getMembershipForAuthenticatedUser({ org })
route: GET /user/memberships/orgs/{org}
scope: orgs
type: API method
---

# Get an organization membership for the authenticated user

```js
octokit.rest.orgs.getMembershipForAuthenticatedUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user).
