---
name: Update a repository ruleset
example: octokit.rest.repos.updateRepoRuleset({ owner, repo, ruleset_id, bypass_actors[].actor_type, rules[].type, rules[].parameters.update_allows_fetch_and_merge, rules[].parameters.check_response_timeout_minutes, rules[].parameters.grouping_strategy, rules[].parameters.max_entries_to_build, rules[].parameters.max_entries_to_merge, rules[].parameters.merge_method, rules[].parameters.min_entries_to_merge, rules[].parameters.min_entries_to_merge_wait_minutes, rules[].parameters.required_deployment_environments, rules[].parameters.dismiss_stale_reviews_on_push, rules[].parameters.require_code_owner_review, rules[].parameters.require_last_push_approval, rules[].parameters.required_approving_review_count, rules[].parameters.required_review_thread_resolution, rules[].parameters.required_status_checks, rules[].parameters.required_status_checks[].context, rules[].parameters.strict_required_status_checks_policy, rules[].parameters.operator, rules[].parameters.pattern, rules[].parameters.restricted_file_paths, rules[].parameters.max_file_path_length, rules[].parameters.restricted_file_extensions, rules[].parameters.max_file_size, rules[].parameters.workflows, rules[].parameters.workflows[].path, rules[].parameters.workflows[].repository_id, rules[].parameters.code_scanning_tools, rules[].parameters.code_scanning_tools[].alerts_threshold, rules[].parameters.code_scanning_tools[].security_alerts_threshold, rules[].parameters.code_scanning_tools[].tool })
route: PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}
scope: repos
type: API method
---

# Update a repository ruleset

Update a ruleset for a repository.

```js
octokit.rest.repos.updateRepoRuleset({
        owner,
repo,
ruleset_id,
bypass_actors[].actor_type,
rules[].type,
rules[].parameters.update_allows_fetch_and_merge,
rules[].parameters.check_response_timeout_minutes,
rules[].parameters.grouping_strategy,
rules[].parameters.max_entries_to_build,
rules[].parameters.max_entries_to_merge,
rules[].parameters.merge_method,
rules[].parameters.min_entries_to_merge,
rules[].parameters.min_entries_to_merge_wait_minutes,
rules[].parameters.required_deployment_environments,
rules[].parameters.dismiss_stale_reviews_on_push,
rules[].parameters.require_code_owner_review,
rules[].parameters.require_last_push_approval,
rules[].parameters.required_approving_review_count,
rules[].parameters.required_review_thread_resolution,
rules[].parameters.required_status_checks,
rules[].parameters.required_status_checks[].context,
rules[].parameters.strict_required_status_checks_policy,
rules[].parameters.operator,
rules[].parameters.pattern,
rules[].parameters.restricted_file_paths,
rules[].parameters.max_file_path_length,
rules[].parameters.restricted_file_extensions,
rules[].parameters.max_file_size,
rules[].parameters.workflows,
rules[].parameters.workflows[].path,
rules[].parameters.workflows[].repository_id,
rules[].parameters.code_scanning_tools,
rules[].parameters.code_scanning_tools[].alerts_threshold,
rules[].parameters.code_scanning_tools[].security_alerts_threshold,
rules[].parameters.code_scanning_tools[].tool
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
<tr><td>ruleset_id</td><td>yes</td><td>

The ID of the ruleset.

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the ruleset.

</td></tr>
<tr><td>target</td><td>no</td><td>

The target of the ruleset

</td></tr>
<tr><td>enforcement</td><td>no</td><td>

The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise).

</td></tr>
<tr><td>bypass_actors</td><td>no</td><td>

The actors that can bypass the rules in this ruleset

</td></tr>
<tr><td>bypass_actors[].actor_id</td><td>no</td><td>

The ID of the actor that can bypass a ruleset. If `actor_type` is `OrganizationAdmin`, this should be `1`. If `actor_type` is `DeployKey`, this should be null. `OrganizationAdmin` is not applicable for personal repositories.

</td></tr>
<tr><td>bypass_actors[].actor_type</td><td>yes</td><td>

The type of actor that can bypass a ruleset.

</td></tr>
<tr><td>bypass_actors[].bypass_mode</td><td>no</td><td>

When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests. `pull_request` is not applicable for the `DeployKey` actor type. Also, `pull_request` is only applicable to branch rulesets.

</td></tr>
<tr><td>conditions</td><td>no</td><td>

Parameters for a repository ruleset ref name condition

</td></tr>
<tr><td>conditions.ref_name</td><td>no</td><td>

</td></tr>
<tr><td>conditions.ref_name.include</td><td>no</td><td>

Array of ref names or patterns to include. One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

</td></tr>
<tr><td>conditions.ref_name.exclude</td><td>no</td><td>

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

</td></tr>
<tr><td>rules</td><td>no</td><td>

An array of rules within the ruleset.

</td></tr>
<tr><td>rules[].type</td><td>yes</td><td>

</td></tr>
<tr><td>rules[].parameters</td><td>no</td><td>

</td></tr>
<tr><td>rules[].parameters.update_allows_fetch_and_merge</td><td>yes</td><td>

Branch can pull changes from its upstream repository

</td></tr>
<tr><td>rules[].parameters.check_response_timeout_minutes</td><td>yes</td><td>

Maximum time for a required status check to report a conclusion. After this much time has elapsed, checks that have not reported a conclusion will be assumed to have failed

</td></tr>
<tr><td>rules[].parameters.grouping_strategy</td><td>yes</td><td>

When set to ALLGREEN, the merge commit created by merge queue for each PR in the group must pass all required checks to merge. When set to HEADGREEN, only the commit at the head of the merge group, i.e. the commit containing changes from all of the PRs in the group, must pass its required checks to merge.

</td></tr>
<tr><td>rules[].parameters.max_entries_to_build</td><td>yes</td><td>

Limit the number of queued pull requests requesting checks and workflow runs at the same time.

</td></tr>
<tr><td>rules[].parameters.max_entries_to_merge</td><td>yes</td><td>

The maximum number of PRs that will be merged together in a group.

</td></tr>
<tr><td>rules[].parameters.merge_method</td><td>yes</td><td>

Method to use when merging changes from queued pull requests.

</td></tr>
<tr><td>rules[].parameters.min_entries_to_merge</td><td>yes</td><td>

The minimum number of PRs that will be merged together in a group.

</td></tr>
<tr><td>rules[].parameters.min_entries_to_merge_wait_minutes</td><td>yes</td><td>

The time merge queue should wait after the first PR is added to the queue for the minimum group size to be met. After this time has elapsed, the minimum group size will be ignored and a smaller group will be merged.

</td></tr>
<tr><td>rules[].parameters.required_deployment_environments</td><td>yes</td><td>

The environments that must be successfully deployed to before branches can be merged.

</td></tr>
<tr><td>rules[].parameters.allowed_merge_methods</td><td>no</td><td>

Array of allowed merge methods. Allowed values include `merge`, `squash`, and `rebase`. At least one option must be enabled.

</td></tr>
<tr><td>rules[].parameters.dismiss_stale_reviews_on_push</td><td>yes</td><td>

New, reviewable commits pushed will dismiss previous pull request review approvals.

</td></tr>
<tr><td>rules[].parameters.require_code_owner_review</td><td>yes</td><td>

Require an approving review in pull requests that modify files that have a designated code owner.

</td></tr>
<tr><td>rules[].parameters.require_last_push_approval</td><td>yes</td><td>

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

</td></tr>
<tr><td>rules[].parameters.required_approving_review_count</td><td>yes</td><td>

The number of approving reviews that are required before a pull request can be merged.

</td></tr>
<tr><td>rules[].parameters.required_review_thread_resolution</td><td>yes</td><td>

All conversations on code must be resolved before a pull request can be merged.

</td></tr>
<tr><td>rules[].parameters.do_not_enforce_on_create</td><td>no</td><td>

Allow repositories and branches to be created if a check would otherwise prohibit it.

</td></tr>
<tr><td>rules[].parameters.required_status_checks</td><td>yes</td><td>

Status checks that are required.

</td></tr>
<tr><td>rules[].parameters.required_status_checks[].context</td><td>yes</td><td>

The status check context name that must be present on the commit.

</td></tr>
<tr><td>rules[].parameters.required_status_checks[].integration_id</td><td>no</td><td>

The optional integration ID that this status check must originate from.

</td></tr>
<tr><td>rules[].parameters.strict_required_status_checks_policy</td><td>yes</td><td>

Whether pull requests targeting a matching branch must be tested with the latest code. This setting will not take effect unless at least one status check is enabled.

</td></tr>
<tr><td>rules[].parameters.name</td><td>no</td><td>

How this rule will appear to users.

</td></tr>
<tr><td>rules[].parameters.negate</td><td>no</td><td>

If true, the rule will fail if the pattern matches.

</td></tr>
<tr><td>rules[].parameters.operator</td><td>yes</td><td>

The operator to use for matching.

</td></tr>
<tr><td>rules[].parameters.pattern</td><td>yes</td><td>

The pattern to match with.

</td></tr>
<tr><td>rules[].parameters.restricted_file_paths</td><td>yes</td><td>

The file paths that are restricted from being pushed to the commit graph.

</td></tr>
<tr><td>rules[].parameters.max_file_path_length</td><td>yes</td><td>

The maximum amount of characters allowed in file paths

</td></tr>
<tr><td>rules[].parameters.restricted_file_extensions</td><td>yes</td><td>

The file extensions that are restricted from being pushed to the commit graph.

</td></tr>
<tr><td>rules[].parameters.max_file_size</td><td>yes</td><td>

The maximum file size allowed in megabytes. This limit does not apply to Git Large File Storage (Git LFS).

</td></tr>
<tr><td>rules[].parameters.workflows</td><td>yes</td><td>

Workflows that must pass for this rule to pass.

</td></tr>
<tr><td>rules[].parameters.workflows[].path</td><td>yes</td><td>

The path to the workflow file

</td></tr>
<tr><td>rules[].parameters.workflows[].ref</td><td>no</td><td>

The ref (branch or tag) of the workflow file to use

</td></tr>
<tr><td>rules[].parameters.workflows[].repository_id</td><td>yes</td><td>

The ID of the repository where the workflow is defined

</td></tr>
<tr><td>rules[].parameters.workflows[].sha</td><td>no</td><td>

The commit SHA of the workflow file to use

</td></tr>
<tr><td>rules[].parameters.code_scanning_tools</td><td>yes</td><td>

Tools that must provide code scanning results for this rule to pass.

</td></tr>
<tr><td>rules[].parameters.code_scanning_tools[].alerts_threshold</td><td>yes</td><td>

The severity level at which code scanning results that raise alerts block a reference update. For more information on alert severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."

</td></tr>
<tr><td>rules[].parameters.code_scanning_tools[].security_alerts_threshold</td><td>yes</td><td>

The severity level at which code scanning results that raise security alerts block a reference update. For more information on security severity levels, see "[About code scanning alerts](https://docs.github.com/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-alert-severity-and-security-severity-levels)."

</td></tr>
<tr><td>rules[].parameters.code_scanning_tools[].tool</td><td>yes</td><td>

The name of a code scanning tool

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/rules#update-a-repository-ruleset).
