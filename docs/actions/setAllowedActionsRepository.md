---
name: Set allowed actions and reusable workflows for a repository
example: octokit.rest.actions.setAllowedActionsRepository({ owner, repo })
route: PUT /repos/{owner}/{repo}/actions/permissions/selected-actions
scope: actions
type: API method
---

# Set allowed actions and reusable workflows for a repository

Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.setAllowedActionsRepository({
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

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>github_owned_allowed</td><td>no</td><td>

Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.

</td></tr>
<tr><td>verified_allowed</td><td>no</td><td>

Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.

</td></tr>
<tr><td>patterns_allowed</td><td>no</td><td>

Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.

> [!NOTE]
> The `patterns_allowed` setting only applies to public repositories.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/permissions#set-allowed-actions-and-reusable-workflows-for-a-repository).
