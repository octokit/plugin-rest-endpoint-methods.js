---
name: Get Copilot seat assignment details for a user
example: octokit.rest.copilot.getCopilotSeatDetailsForUser({ org, username })
route: GET /orgs/{org}/members/{username}/copilot
scope: copilot
type: API method
---

# Get Copilot seat assignment details for a user

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets the GitHub Copilot seat details for a member of an organization who currently has access to GitHub Copilot.

The seat object contains information about the user's most recent Copilot activity. Users must have telemetry enabled in their IDE for Copilot in the IDE activity to be reflected in `last_activity_at`.
For more information about activity data, see "[Reviewing user activity data for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization)."

Only organization owners can view Copilot seat assignment details for members of their organization.

OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.

```js
octokit.rest.copilot.getCopilotSeatDetailsForUser({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-user-management#get-copilot-seat-assignment-details-for-a-user).
