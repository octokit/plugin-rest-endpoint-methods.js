---
name: Delete an image version of custom image from the organization
example: octokit.rest.actions.deleteCustomImageVersionFromOrg({ org, image_definition_id, version })
route: DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}/versions/{version}
scope: actions
type: API method
---

# Delete an image version of custom image from the organization

Delete an image version of custom image from the organization.

OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.deleteCustomImageVersionFromOrg({
  org,
  image_definition_id,
  version,
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
<tr><td>image_definition_id</td><td>yes</td><td>

Image definition ID of custom image

</td></tr>
<tr><td>version</td><td>yes</td><td>

Version of a custom image

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#delete-an-image-version-of-custom-image-from-the-organization).
