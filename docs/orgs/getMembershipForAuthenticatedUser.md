---
name: Get an organization membership for the authenticated user
example: octokit.rest.orgs.getMembershipForAuthenticatedUser({ org })
route: GET /user/memberships/orgs/{org}
scope: orgs
type: API method
---

# Get an organization membership for the authenticated user

If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/members#get-an-organization-membership-for-the-authenticated-user).
