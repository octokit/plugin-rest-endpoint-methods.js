---
name: List organization members
example: octokit.orgs.listMembers({ org })
route: GET /orgs/{org}/members
scope: orgs
type: API method
---

# List organization members

List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.

```js
octokit.orgs.listMembers({
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

</td></tr>
<tr><td>filter</td><td>no</td><td>

Filter members returned in the list. Can be one of:  
\* `2fa_disabled` - Members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled. Available for organization owners.  
\* `all` - All members the authenticated user can see.

</td></tr>
<tr><td>role</td><td>no</td><td>

Filter members returned by their role. Can be one of:  
\* `all` - All members of the organization, regardless of role.  
\* `admin` - Organization owners.  
\* `member` - Non-owner organization members.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#list-organization-members).
