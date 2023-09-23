---
name: Get Copilot for Business seat assignment details for a user
example: octokit.rest.copilot.getCopilotSeatAssignmentDetailsForUser({ org, username })
route: GET /orgs/{org}/members/{username}/copilot
scope: copilot
type: API method
---

# Get Copilot for Business seat assignment details for a user

**Note**: This endpoint is in beta and is subject to change.

Gets the GitHub Copilot for Business seat assignment details for a member of an organization who currently has access to GitHub Copilot.

Organization owners and members with admin permissions can view GitHub Copilot seat assignment details for members in their organization. You must authenticate using an access token with the `manage_billing:copilot` scope to use this endpoint.

```js
octokit.rest.copilot.getCopilotSeatAssignmentDetailsForUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-for-business#get-copilot-for-business-seat-assignment-details-for-a-user).
