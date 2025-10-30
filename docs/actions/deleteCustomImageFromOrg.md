---
name: Delete a custom image from the organization
example: octokit.rest.actions.deleteCustomImageFromOrg({ org, image_definition_id })
route: DELETE /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}
scope: actions
type: API method
---

# Delete a custom image from the organization

Delete a custom image from the organization.

OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.deleteCustomImageFromOrg({
  org,
  image_definition_id,
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#delete-a-custom-image-from-the-organization).
