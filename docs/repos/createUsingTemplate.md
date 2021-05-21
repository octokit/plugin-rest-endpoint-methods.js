---
name: Create a repository using a template
example: octokit.rest.repos.createUsingTemplate({ template_owner, template_repo, name })
route: POST /repos/{template_owner}/{template_repo}/generate
scope: repos
type: API method
---

# Create a repository using a template

Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

- `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
- `repo` scope to create a private repository

```js
octokit.rest.repos.createUsingTemplate({
  template_owner,
  template_repo,
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
    <tr><td>template_owner</td><td>yes</td><td>

</td></tr>
<tr><td>template_repo</td><td>yes</td><td>

</td></tr>
<tr><td>owner</td><td>no</td><td>

The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the new repository.

</td></tr>
<tr><td>description</td><td>no</td><td>

A short description of the new repository.

</td></tr>
<tr><td>include_all_branches</td><td>no</td><td>

Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.

</td></tr>
<tr><td>private</td><td>no</td><td>

Either `true` to create a new private repository or `false` to create a new public one.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template).
