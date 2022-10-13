---
name: Update pull request review protection
example: octokit.rest.repos.updatePullRequestReviewProtection({ owner, repo, branch })
route: PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
scope: repos
type: API method
---

# Update pull request review protection

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

```js
octokit.rest.repos.updatePullRequestReviewProtection({
  owner,
  repo,
  branch,
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
<tr><td>branch</td><td>yes</td><td>

The name of the branch.

</td></tr>
<tr><td>dismissal_restrictions</td><td>no</td><td>

Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.

</td></tr>
<tr><td>dismissal_restrictions.users</td><td>no</td><td>

The list of user `login`s with dismissal access

</td></tr>
<tr><td>dismissal_restrictions.teams</td><td>no</td><td>

The list of team `slug`s with dismissal access

</td></tr>
<tr><td>dismissal_restrictions.apps</td><td>no</td><td>

The list of app `slug`s with dismissal access

</td></tr>
<tr><td>dismiss_stale_reviews</td><td>no</td><td>

Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.

</td></tr>
<tr><td>require_code_owner_reviews</td><td>no</td><td>

Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed.

</td></tr>
<tr><td>required_approving_review_count</td><td>no</td><td>

Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.

</td></tr>
<tr><td>bypass_pull_request_allowances</td><td>no</td><td>

Allow specific users, teams, or apps to bypass pull request requirements.

</td></tr>
<tr><td>bypass_pull_request_allowances.users</td><td>no</td><td>

The list of user `login`s allowed to bypass pull request requirements.

</td></tr>
<tr><td>bypass_pull_request_allowances.teams</td><td>no</td><td>

The list of team `slug`s allowed to bypass pull request requirements.

</td></tr>
<tr><td>bypass_pull_request_allowances.apps</td><td>no</td><td>

The list of app `slug`s allowed to bypass pull request requirements.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/repos#update-pull-request-review-protection).
