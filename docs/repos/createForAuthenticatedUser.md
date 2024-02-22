---
name: Create a repository for the authenticated user
example: octokit.rest.repos.createForAuthenticatedUser({ name })
route: POST /user/repos
scope: repos
type: API method
---

# Create a repository for the authenticated user

Creates a new repository for the authenticated user.

OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.

```js
octokit.rest.repos.createForAuthenticatedUser({
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
<tr><td>has_issues</td><td>no</td><td>

Whether issues are enabled.

</td></tr>
<tr><td>has_projects</td><td>no</td><td>

Whether projects are enabled.

</td></tr>
<tr><td>has_wiki</td><td>no</td><td>

Whether the wiki is enabled.

</td></tr>
<tr><td>has_discussions</td><td>no</td><td>

Whether discussions are enabled.

</td></tr>
<tr><td>team_id</td><td>no</td><td>

The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.

</td></tr>
<tr><td>auto_init</td><td>no</td><td>

Whether the repository is initialized with a minimal README.

</td></tr>
<tr><td>gitignore_template</td><td>no</td><td>

The desired language or platform to apply to the .gitignore.

</td></tr>
<tr><td>license_template</td><td>no</td><td>

The license keyword of the open source license for this repository.

</td></tr>
<tr><td>allow_squash_merge</td><td>no</td><td>

Whether to allow squash merges for pull requests.

</td></tr>
<tr><td>allow_merge_commit</td><td>no</td><td>

Whether to allow merge commits for pull requests.

</td></tr>
<tr><td>allow_rebase_merge</td><td>no</td><td>

Whether to allow rebase merges for pull requests.

</td></tr>
<tr><td>allow_auto_merge</td><td>no</td><td>

Whether to allow Auto-merge to be used on pull requests.

</td></tr>
<tr><td>delete_branch_on_merge</td><td>no</td><td>

Whether to delete head branches when pull requests are merged

</td></tr>
<tr><td>squash_merge_commit_title</td><td>no</td><td>

The default value for a squash merge commit title:

- `PR_TITLE` - default to the pull request's title.
- `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).

</td></tr>
<tr><td>squash_merge_commit_message</td><td>no</td><td>

The default value for a squash merge commit message:

- `PR_BODY` - default to the pull request's body.
- `COMMIT_MESSAGES` - default to the branch's commit messages.
- `BLANK` - default to a blank commit message.

</td></tr>
<tr><td>merge_commit_title</td><td>no</td><td>

The default value for a merge commit title.

- `PR_TITLE` - default to the pull request's title.
- `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).

</td></tr>
<tr><td>merge_commit_message</td><td>no</td><td>

The default value for a merge commit message.

- `PR_TITLE` - default to the pull request's title.
- `PR_BODY` - default to the pull request's body.
- `BLANK` - default to a blank commit message.

</td></tr>
<tr><td>has_downloads</td><td>no</td><td>

Whether downloads are enabled.

</td></tr>
<tr><td>is_template</td><td>no</td><td>

Whether this repository acts as a template that can be used to generate new repositories.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).
