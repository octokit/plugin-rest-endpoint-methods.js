---
name: Set public organization membership for the authenticated user
example: octokit.orgs.publicizeMembership({ org, username })
route: PUT /orgs/{org}/public_members/{username}
scope: orgs
type: API method
---

# Set public organization membership for the authenticated user

**Deprecated:** This method has been renamed to orgs.setPublicMembershipForAuthenticatedUser

The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

```js
octokit.orgs.publicizeMembership({
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

</td></tr>
<tr><td>username</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/members/#set-public-organization-membership-for-the-authenticated-user).
