---

name: Get Copilot content exclusion rules for an organization
example: octokit.rest.copilot.copilotContentExclusionForOrganization({ org })
route: GET /orgs/{org}/copilot/content_exclusion
scope: copilot
type: API method
---

# Get Copilot content exclusion rules for an organization

> [!NOTE]
> This endpoint is in public preview and is subject to change.

Gets information about an organization's Copilot content exclusion path rules.
To configure these settings, go to the organization's settings on GitHub.
For more information, see "[Excluding content from GitHub Copilot](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#configuring-content-exclusions-for-your-organization)."

Organization owners can view details about Copilot content exclusion rules for the organization.

OAuth app tokens and personal access tokens (classic) need either the `copilot` or `read:org` scopes to use this endpoint.

> [!CAUTION]
>
> - At this time, the API does not support comments. This endpoint will not return any comments in the existing rules.
> - At this time, the API does not support duplicate keys. If your content exclusion configuration contains duplicate keys, the API will return only the last occurrence of that key. For example, if duplicate entries are present, only the final value will be included in the response.

```js
octokit.rest.copilot.copilotContentExclusionForOrganization({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/copilot/copilot-content-exclusion-management#get-copilot-content-exclusion-rules-for-an-organization).
