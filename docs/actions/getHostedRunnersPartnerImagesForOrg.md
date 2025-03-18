---
name: Get partner images for GitHub-hosted runners in an organization
example: octokit.rest.actions.getHostedRunnersPartnerImagesForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/images/partner
scope: actions
type: API method
---

# Get partner images for GitHub-hosted runners in an organization

Get the list of partner images available for GitHub-hosted runners for an organization.

```js
octokit.rest.actions.getHostedRunnersPartnerImagesForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-partner-images-for-github-hosted-runners-in-an-organization).
