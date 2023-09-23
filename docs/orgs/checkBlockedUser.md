---
name: Check if a user is blocked by an organization
example: octokit.rest.orgs.checkBlockedUser({ org, username })
route: GET /orgs/{org}/blocks/{username}
scope: orgs
type: API method
---

# Check if a user is blocked by an organization

Returns a 204 if the given user is blocked by the given organization. Returns a 404 if the organization is not blocking the user, or if the user account has been identified as spam by GitHub.

```js
octokit.rest.orgs.checkBlockedUser({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>username</td><td>yes</td><td>

The handle for the GitHub user account.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/blocking#check-if-a-user-is-blocked-by-an-organization).
