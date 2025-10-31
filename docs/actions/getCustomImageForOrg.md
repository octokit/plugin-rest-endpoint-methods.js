---
name: Get a custom image definition for GitHub Actions Hosted Runners
example: octokit.rest.actions.getCustomImageForOrg({ org, image_definition_id })
route: GET /orgs/{org}/actions/hosted-runners/images/custom/{image_definition_id}
scope: actions
type: API method
---

# Get a custom image definition for GitHub Actions Hosted Runners

Get a custom image definition for GitHub Actions Hosted Runners.

OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```js
octokit.rest.actions.getCustomImageForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-a-custom-image-definition-for-github-actions-hosted-runners).
