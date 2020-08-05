---
name: Create a self-hosted runner group for an organization
example: octokit.actions.createSelfHostedRunnerGroupForOrg({ org, name })
route: POST /orgs/{org}/actions/runner-groups
scope: actions
type: API method
---

# Create a self-hosted runner group for an organization

**Warning:** The self-hosted runner group API is currently in public beta and subject to change.

The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."

Creates a new self-hosted runner group for an organization.

You must authenticate using an access token with the `admin:org` scope to use this endpoint.

```js
octokit.actions.createSelfHostedRunnerGroupForOrg({
  org,
  name,
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

</td></tr>
<tr><td>name</td><td>yes</td><td>

Name of the runner group.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories. Can be one of: `all`, `selected`, or `private`.

</td></tr>
<tr><td>selected_repository_ids</td><td>no</td><td>

List of repository IDs that can access the runner group.

</td></tr>
<tr><td>runners</td><td>no</td><td>

List of runner IDs to add to the runner group.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/actions/self-hosted-runner-groups/#create-a-self-hosted-runner-group-for-an-organization).
