---
name: Get community profile metrics
example: octokit.repos.getCommunityProfileMetrics({ owner, repo })
route: GET /repos/{owner}/{repo}/community/profile
scope: repos
type: API method
---

# Get community profile metrics

This endpoint will return all community profile metrics, including an
overall health score, repository description, the presence of documentation, detected
code of conduct, detected license, and the presence of ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE,
README, and CONTRIBUTING files.

The `health_percentage` score is defined as a percentage of how many of
these four documents are present: README, CONTRIBUTING, LICENSE, and
CODE_OF_CONDUCT. For example, if all four documents are present, then
the `health_percentage` is `100`. If only one is present, then the
`health_percentage` is `25`.

`content_reports_enabled` is only returned for organization-owned repositories.

```js
octokit.repos.getCommunityProfileMetrics({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#get-community-profile-metrics).
