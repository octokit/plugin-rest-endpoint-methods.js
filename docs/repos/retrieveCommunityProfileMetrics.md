---
name: Get community profile metrics
example: octokit.repos.retrieveCommunityProfileMetrics({ owner, repo })
route: GET /repos/{owner}/{repo}/community/profile
scope: repos
type: API method
---

# Get community profile metrics

**Deprecated:** This method has been renamed to repos.getCommunityProfileMetrics

This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE, README, and CONTRIBUTING files.

```js
octokit.repos.retrieveCommunityProfileMetrics({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/community/#get-community-profile-metrics).
