---
name: List image versions of a custom image for an organization
example: octokit.rest.actions.listCustomImageVersionsForOrg({ image_definition_id, org })
route: GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions
scope: actions
type: API method
---

# List image versions of a custom image for an organization

List image versions of a custom image for an organization.

OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.listCustomImageVersionsForOrg({
  image_definition_id,
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
    <tr><td>image_definition_id</td><td>yes</td><td>

Image definition ID of custom image

</td></tr>
<tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#list-image-versions-of-a-custom-image-for-an-organization).
