---

name: Enable a repository for Copilot cloud agent in an organization
example: octokit.rest.copilot.enableCopilotCodingAgentForRepositoryInOrganization({ org, repository_id })
route: PUT /orgs/{org}/copilot/coding-agent/permissions/repositories/{repository_id}
scope: copilot
type: API method
---

# Enable a repository for Copilot cloud agent in an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Adds a repository to the list of selected repositories enabled for Copilot
cloud agent in an organization. This method can only be called when the
cloud agent repository policy is set to `selected`.

OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```js
octokit.rest.copilot.enableCopilotCodingAgentForRepositoryInOrganization({
  org,
  repository_id,
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
<tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-coding-agent-management#enable-a-repository-for-copilot-cloud-agent-in-an-organization).
