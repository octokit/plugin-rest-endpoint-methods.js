---
name: List organization invitation teams
example: octokit.rest.orgs.listInvitationTeams({ org, invitation_id })
route: GET /orgs/{org}/invitations/{invitation_id}/teams
scope: orgs
type: API method
---

# List organization invitation teams

List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.

```js
octokit.rest.orgs.listInvitationTeams({
  org,
  invitation_id,
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
<tr><td>invitation_id</td><td>yes</td><td>

invitation_id parameter

</td></tr>
<tr><td>per_page</td><td>no</td><td>

Results per page (max 100)

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams).
