---
name: Get organization membership for a user
example: octokit.orgs.getMembershipForUser({ org, username })
route: GET /orgs/{org}/memberships/{username}
scope: orgs
type: API method
---

# Get organization membership for a user

In order to get a user's membership with an organization, the authenticated user must be an organization member.

```js
octokit.orgs.getMembershipForUser({
  org,
  username
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
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user).
