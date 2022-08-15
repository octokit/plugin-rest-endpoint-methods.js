---
name: Update a repository
example: octokit.rest.repos.update({ owner, repo })
route: PATCH /repos/{owner}/{repo}
scope: repos
type: API method
---

# Update a repository

**Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/reference/repos#replace-all-repository-topics) endpoint.

```js
octokit.rest.repos.update({
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
<tr><td>name</td><td>no</td><td>

The name of the repository.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the repository.

</td></tr>
<tr><td>homepage</td><td>no</td><td>

A URL with more information about the repository.

</td></tr>
<tr><td>private</td><td>no</td><td>

Either `true` to make the repository private or `false` to make it public. Default: `false`.  
**Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."

</td></tr>
<tr><td>security_and_analysis</td><td>no</td><td>

Specify which security and analysis features to enable or disable for the repository.

To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."

For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
`{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.

You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.

</td></tr>
<tr><td>security_and_analysis.advanced_security</td><td>no</td><td>

Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."

</td></tr>
<tr><td>security_and_analysis.advanced_security.status</td><td>no</td><td>

Can be `enabled` or `disabled`.

</td></tr>
<tr><td>security_and_analysis.secret_scanning</td><td>no</td><td>

Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."

</td></tr>
<tr><td>security_and_analysis.secret_scanning.status</td><td>no</td><td>

Can be `enabled` or `disabled`.

</td></tr>
<tr><td>security_and_analysis.secret_scanning_push_protection</td><td>no</td><td>

Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."

</td></tr>
<tr><td>security_and_analysis.secret_scanning_push_protection.status</td><td>no</td><td>

Can be `enabled` or `disabled`.

</td></tr>
<tr><td>has_issues</td><td>no</td><td>

Either `true` to enable issues for this repository or `false` to disable them.

</td></tr>
<tr><td>has_projects</td><td>no</td><td>

Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.

</td></tr>
<tr><td>has_wiki</td><td>no</td><td>

Either `true` to enable the wiki for this repository or `false` to disable it.

</td></tr>
<tr><td>is_template</td><td>no</td><td>

Either `true` to make this repo available as a template repository or `false` to prevent it.

</td></tr>
<tr><td>default_branch</td><td>no</td><td>

Updates the default branch for this repository.

</td></tr>
<tr><td>allow_squash_merge</td><td>no</td><td>

Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.

</td></tr>
<tr><td>allow_merge_commit</td><td>no</td><td>

Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.

</td></tr>
<tr><td>allow_rebase_merge</td><td>no</td><td>

Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.

</td></tr>
<tr><td>allow_auto_merge</td><td>no</td><td>

Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.

</td></tr>
<tr><td>delete_branch_on_merge</td><td>no</td><td>

Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.

</td></tr>
<tr><td>allow_update_branch</td><td>no</td><td>

Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.

</td></tr>
<tr><td>use_squash_pr_title_as_default</td><td>no</td><td>

Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.

</td></tr>
<tr><td>archived</td><td>no</td><td>

`true` to archive this repository. **Note**: You cannot unarchive repositories through the API.

</td></tr>
<tr><td>allow_forking</td><td>no</td><td>

Either `true` to allow private forks, or `false` to prevent private forks.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos/#update-a-repository).
