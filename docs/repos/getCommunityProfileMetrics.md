---
name: Get community profile metrics
example: octokit.rest.repos.getCommunityProfileMetrics({ owner, repo })
route: GET /repos/{owner}/{repo}/community/profile
scope: repos
type: API method
---

# Get community profile metrics

Returns all community profile metrics for a repository. The repository cannot be a fork.

The returned metrics include an overall health score, the repository description, the presence of documentation, the
detected code of conduct, the detected license, and the presence of ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE,
README, and CONTRIBUTING files.

The `health_percentage` score is defined as a percentage of how many of
these four documents are present: README, CONTRIBUTING, LICENSE, and
CODE_OF_CONDUCT. For example, if all four documents are present, then
the `health_percentage` is `100`. If only one is present, then the
`health_percentage` is `25`.

`content_reports_enabled` is only returned for organization-owned repositories.

```js
octokit.rest.repos.getCommunityProfileMetrics({
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

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/metrics/community#get-community-profile-metrics).
