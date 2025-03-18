---
name: Get GitHub-owned images for GitHub-hosted runners in an organization
example: octokit.rest.actions.getHostedRunnersGithubOwnedImagesForOrg({ org })
route: GET /orgs/{org}/actions/hosted-runners/images/github-owned
scope: actions
type: API method
---

# Get GitHub-owned images for GitHub-hosted runners in an organization

Get the list of GitHub-owned images available for GitHub-hosted runners for an organization.

```js
octokit.rest.actions.getHostedRunnersGithubOwnedImagesForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/hosted-runners#get-github-owned-images-for-github-hosted-runners-in-an-organization).
