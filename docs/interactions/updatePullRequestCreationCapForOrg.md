---

name: Update pull request creation cap for an org
example: octokit.rest.interactions.updatePullRequestCreationCapForOrg({ org, enabled })
route: PATCH /orgs/{org}/interaction-limits/pulls/creation-cap
scope: interactions
type: API method
---

# Update pull request creation cap for an org

Updates the pull request creation cap for an organization. The cap limits the total number
of open pull requests a user can have across all public repositories in the organization
at one time.

Only users with admin access to the organization can configure the cap.

```js
octokit.rest.interactions.updatePullRequestCreationCapForOrg({
  org,
  enabled,
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
<tr><td>enabled</td><td>yes</td><td>

Whether the pull request creation cap is enabled

</td></tr>
<tr><td>max_open_pull_requests</td><td>no</td><td>

The maximum number of open pull requests a user can have at one time

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/orgs#update-pull-request-creation-cap-for-an-org).
