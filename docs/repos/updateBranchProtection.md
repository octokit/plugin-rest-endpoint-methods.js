---
name: Update branch protection
example: octokit.rest.repos.updateBranchProtection({ owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, required_status_checks.checks[].context, enforce_admins, required_pull_request_reviews, restrictions, restrictions.users, restrictions.teams })
route: PUT /repos/{owner}/{repo}/branches/{branch}/protection
scope: repos
type: API method
---

# Update branch protection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

> [!NOTE]
> Passing new arrays of `users` and `teams` replaces their previous values.

> [!NOTE]
> The list of users, apps, and teams in total is limited to 100 items.

```js
octokit.rest.repos.updateBranchProtection({
        owner,
repo,
branch,
required_status_checks,
required_status_checks.strict,
required_status_checks.contexts,
required_status_checks.checks[].context,
enforce_admins,
required_pull_request_reviews,
restrictions,
restrictions.users,
restrictions.teams
      })
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
<tr><td>branch</td><td>yes</td><td>

The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).

</td></tr>
<tr><td>required_status_checks</td><td>yes</td><td>

Require status checks to pass before merging. Set to `null` to disable.

</td></tr>
<tr><td>required_status_checks.strict</td><td>yes</td><td>

Require branches to be up to date before merging.

</td></tr>
<tr><td>required_status_checks.contexts</td><td>yes</td><td>

**Closing down notice**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.

</td></tr>
<tr><td>required_status_checks.checks</td><td>no</td><td>

The list of status checks to require in order to merge into this branch.

</td></tr>
<tr><td>required_status_checks.checks[].context</td><td>yes</td><td>

The name of the required check

</td></tr>
<tr><td>required_status_checks.checks[].app_id</td><td>no</td><td>

The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.

</td></tr>
<tr><td>enforce_admins</td><td>yes</td><td>

Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.

</td></tr>
<tr><td>required_pull_request_reviews</td><td>yes</td><td>

Require at least one approving review on a pull request, before merging. Set to `null` to disable.

</td></tr>
<tr><td>required_pull_request_reviews.dismissal_restrictions</td><td>no</td><td>

Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.

</td></tr>
<tr><td>required_pull_request_reviews.dismissal_restrictions.users</td><td>no</td><td>

The list of user `login`s with dismissal access

</td></tr>
<tr><td>required_pull_request_reviews.dismissal_restrictions.teams</td><td>no</td><td>

The list of team `slug`s with dismissal access

</td></tr>
<tr><td>required_pull_request_reviews.dismissal_restrictions.apps</td><td>no</td><td>

The list of app `slug`s with dismissal access

</td></tr>
<tr><td>required_pull_request_reviews.dismiss_stale_reviews</td><td>no</td><td>

Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.

</td></tr>
<tr><td>required_pull_request_reviews.require_code_owner_reviews</td><td>no</td><td>

Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) review them.

</td></tr>
<tr><td>required_pull_request_reviews.required_approving_review_count</td><td>no</td><td>

Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.

</td></tr>
<tr><td>required_pull_request_reviews.require_last_push_approval</td><td>no</td><td>

Whether the most recent push must be approved by someone other than the person who pushed it. Default: `false`.

</td></tr>
<tr><td>required_pull_request_reviews.bypass_pull_request_allowances</td><td>no</td><td>

Allow specific users, teams, or apps to bypass pull request requirements.

</td></tr>
<tr><td>required_pull_request_reviews.bypass_pull_request_allowances.users</td><td>no</td><td>

The list of user `login`s allowed to bypass pull request requirements.

</td></tr>
<tr><td>required_pull_request_reviews.bypass_pull_request_allowances.teams</td><td>no</td><td>

The list of team `slug`s allowed to bypass pull request requirements.

</td></tr>
<tr><td>required_pull_request_reviews.bypass_pull_request_allowances.apps</td><td>no</td><td>

The list of app `slug`s allowed to bypass pull request requirements.

</td></tr>
<tr><td>restrictions</td><td>yes</td><td>

Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.

</td></tr>
<tr><td>restrictions.users</td><td>yes</td><td>

The list of user `login`s with push access

</td></tr>
<tr><td>restrictions.teams</td><td>yes</td><td>

The list of team `slug`s with push access

</td></tr>
<tr><td>restrictions.apps</td><td>no</td><td>

The list of app `slug`s with push access

</td></tr>
<tr><td>required_linear_history</td><td>no</td><td>

Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://docs.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.

</td></tr>
<tr><td>allow_force_pushes</td><td>no</td><td>

Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."

</td></tr>
<tr><td>allow_deletions</td><td>no</td><td>

Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.

</td></tr>
<tr><td>block_creations</td><td>no</td><td>

If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`.

</td></tr>
<tr><td>required_conversation_resolution</td><td>no</td><td>

Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`.

</td></tr>
<tr><td>lock_branch</td><td>no</td><td>

Whether to set the branch as read-only. If this is true, users will not be able to push to the branch. Default: `false`.

</td></tr>
<tr><td>allow_fork_syncing</td><td>no</td><td>

Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing. Default: `false`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/branches/branch-protection#update-branch-protection).
