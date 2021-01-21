---
name: Create an organization invitation
example: octokit.orgs.createInvitation({ org })
route: POST /orgs/{org}/invitations
scope: orgs
type: API method
---

# Create an organization invitation

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.

```js
octokit.orgs.createInvitation({
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
<tr><td>invitee_id</td><td>no</td><td>

**Required unless you provide `email`**. GitHub user ID for the person you are inviting.

</td></tr>
<tr><td>email</td><td>no</td><td>

**Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.

</td></tr>
<tr><td>role</td><td>no</td><td>

Specify role for new member. Can be one of:  
\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  
\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.  
\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.

</td></tr>
<tr><td>team_ids</td><td>no</td><td>

Specify IDs for the teams you want to invite new members to.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#create-an-organization-invitation).
