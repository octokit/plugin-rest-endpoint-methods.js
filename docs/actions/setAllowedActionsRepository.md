---
name: Set allowed actions for a repository
example: octokit.actions.setAllowedActionsRepository({ owner, repo, github_owned_allowed, verified_allowed, patterns_allowed })
route: PUT /repos/{owner}/{repo}/actions/permissions/selected-actions
scope: actions
type: API method
---

# Set allowed actions for a repository

Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.

To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.

```js
octokit.actions.setAllowedActionsRepository({
  owner,
  repo,
  github_owned_allowed,
  verified_allowed,
  patterns_allowed,
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
<tr><td>github_owned_allowed</td><td>yes</td><td>

Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.

</td></tr>
<tr><td>verified_allowed</td><td>yes</td><td>

Whether actions in GitHub Marketplace from verified creators are allowed. Set to `true` to allow all GitHub Marketplace actions by verified creators.

</td></tr>
<tr><td>patterns_allowed</td><td>yes</td><td>

Specifies a list of string-matching patterns to allow specific action(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`."

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository).
