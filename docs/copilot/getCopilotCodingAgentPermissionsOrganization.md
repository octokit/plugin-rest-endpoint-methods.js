---

name: Get Copilot cloud agent permissions for an organization
example: octokit.rest.copilot.getCopilotCodingAgentPermissionsOrganization({ org })
route: GET /orgs/{org}/copilot/coding-agent/permissions
scope: copilot
type: API method
---

# Get Copilot cloud agent permissions for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets information about which repositories in an organization have been enabled
or disabled for the Copilot cloud agent.

Organization owners can configure whether Copilot cloud agent is enabled for
all repositories, selected repositories, or no repositories owned by organization.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.copilot.getCopilotCodingAgentPermissionsOrganization({
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

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-coding-agent-management#get-copilot-cloud-agent-permissions-for-an-organization).
