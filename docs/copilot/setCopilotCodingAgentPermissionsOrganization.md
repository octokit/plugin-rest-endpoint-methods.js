---

name: Set Copilot cloud agent permissions for an organization
example: octokit.rest.copilot.setCopilotCodingAgentPermissionsOrganization({ org, enabled_repositories })
route: PUT /orgs/{org}/copilot/coding-agent/permissions
scope: copilot
type: API method
---

# Set Copilot cloud agent permissions for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Sets the policy for which repositories in an organization can use Copilot cloud agent.

Organization owners can configure whether Copilot cloud agent is enabled for
all repositories, selected repositories, or no repositories owned by the organization.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.copilot.setCopilotCodingAgentPermissionsOrganization({
  org,
  enabled_repositories,
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
<tr><td>enabled_repositories</td><td>yes</td><td>

The policy for which repositories can use Copilot cloud agent. Can be one of `all`, `selected`, or `none`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-coding-agent-management#set-copilot-cloud-agent-permissions-for-an-organization).
