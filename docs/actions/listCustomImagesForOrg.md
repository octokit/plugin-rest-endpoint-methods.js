---
name: List custom images for an organization
example: octokit.rest.actions.listCustomImagesForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/images/custom
scope: actions
type: API method
---

# List custom images for an organization

List custom images for an organization.

OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.listCustomImagesForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#list-custom-images-for-an-organization).
