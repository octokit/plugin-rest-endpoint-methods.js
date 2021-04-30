---
name: Create an organization repository
example: octokit.rest.repos.createInOrg({ org, name })
route: POST /orgs/{org}/repos
scope: repos
type: API method
---

# Create an organization repository

Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
- `repo` scope to create a private repository

```js
octokit.rest.repos.createInOrg({
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

The name of the repository.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the repository.

</td></tr>
<tr><td>homepage</td><td>no</td><td>

A URL with more information about the repository.

</td></tr>
<tr><td>private</td><td>no</td><td>

Whether the repository is private.

</td></tr>
<tr><td>visibility</td><td>no</td><td>

Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  
The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.

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
<tr><td>team_id</td><td>no</td><td>

The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.

</td></tr>
<tr><td>auto_init</td><td>no</td><td>

Pass `true` to create an initial commit with empty README.

</td></tr>
<tr><td>gitignore_template</td><td>no</td><td>

Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".

</td></tr>
<tr><td>license_template</td><td>no</td><td>

Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".

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
<tr><td>delete_branch_on_merge</td><td>no</td><td>

Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-an-organization-repository).
