---

name: Get pull request creation cap for an org
example: octokit.rest.interactions.getPullRequestCreationCapForOrg({ org })
route: GET /orgs/{org}/interaction-limits/pulls/creation-cap
scope: interactions
type: API method
---

# Get pull request creation cap for an org

Gets the pull request creation cap configuration for an organization.
The cap limits the total number of open pull requests a user can have across all public
repositories in the organization at one time.

Only users with admin access to the organization can view the cap configuration.

```js
octokit.rest.interactions.getPullRequestCreationCapForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/orgs#get-pull-request-creation-cap-for-an-org).
