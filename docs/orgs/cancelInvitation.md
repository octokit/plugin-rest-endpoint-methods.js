---
name: Cancel an organization invitation
example: octokit.rest.orgs.cancelInvitation({ org, invitation_id })
route: DELETE /orgs/{org}/invitations/{invitation_id}
scope: orgs
type: API method
---

# Cancel an organization invitation

Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).

```js
octokit.rest.orgs.cancelInvitation({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>invitation_id</td><td>yes</td><td>

The unique identifier of the invitation.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/members#cancel-an-organization-invitation).
