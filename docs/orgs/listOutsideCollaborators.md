---
name: List outside collaborators for an organization
example: octokit.rest.orgs.listOutsideCollaborators({ org })
route: GET /orgs/{org}/outside_collaborators
scope: orgs
type: API method
---

# List outside collaborators for an organization

List all users who are outside collaborators of an organization.

```js
octokit.rest.orgs.listOutsideCollaborators({
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

Filter the list of outside collaborators. Can be one of:  
\* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.  
\* `all`: All outside collaborators.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization).
