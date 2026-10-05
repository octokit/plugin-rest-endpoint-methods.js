---

name: Set selected repositories for Copilot cloud agent in an organization
example: octokit.rest.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization({ org, selected_repository_ids })
route: PUT /orgs/{org}/copilot/coding-agent/permissions/repositories
scope: copilot
type: API method
---

# Set selected repositories for Copilot cloud agent in an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Replaces the list of selected repositories that are enabled for Copilot cloud
agent in an organization. This method can only be called when the cloud agent
repository policy is set to `selected`.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.copilot.setCopilotCodingAgentSelectedRepositoriesForOrganization({
  org,
  selected_repository_ids,
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
<tr><td>selected_repository_ids</td><td>yes</td><td>

List of repository IDs to enable for Copilot cloud agent.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-coding-agent-management#set-selected-repositories-for-copilot-cloud-agent-in-an-organization).
