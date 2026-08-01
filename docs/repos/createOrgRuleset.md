---
name: Create an organization repository ruleset
example: octokit.rest.repos.createOrgRuleset({ org, name, enforcement, bypass_actors[].actor_type, rules[].type, rules[].parameters.update_allows_fetch_and_merge, rules[].parameters.required_deployment_environments, rules[].parameters.dismiss_stale_reviews_on_push, rules[].parameters.require_code_owner_review, rules[].parameters.require_last_push_approval, rules[].parameters.required_approving_review_count, rules[].parameters.required_review_thread_resolution, rules[].parameters.required_reviewers[].file_patterns, rules[].parameters.required_reviewers[].minimum_approvals, rules[].parameters.required_reviewers[].reviewer, rules[].parameters.required_reviewers[].reviewer.id, rules[].parameters.required_reviewers[].reviewer.type, rules[].parameters.required_status_checks, rules[].parameters.required_status_checks[].context, rules[].parameters.strict_required_status_checks_policy, rules[].parameters.operator, rules[].parameters.pattern, rules[].parameters.restricted_file_paths, rules[].parameters.max_file_path_length, rules[].parameters.restricted_file_extensions, rules[].parameters.max_file_size, rules[].parameters.workflows, rules[].parameters.workflows[].path, rules[].parameters.workflows[].repository_id, rules[].parameters.code_scanning_tools, rules[].parameters.code_scanning_tools[].alerts_threshold, rules[].parameters.code_scanning_tools[].security_alerts_threshold, rules[].parameters.code_scanning_tools[].tool })
route: POST /orgs/{org}/rulesets
scope: repos
type: API method
---

# Create an organization repository ruleset

Create a repository ruleset for an organization.

```js
octokit.rest.repos.createOrgRuleset({
        org,
name,
enforcement,
bypass_actors[].actor_type,
rules[].type,
rules[].parameters.update_allows_fetch_and_merge,
rules[].parameters.required_deployment_environments,
rules[].parameters.dismiss_stale_reviews_on_push,
rules[].parameters.require_code_owner_review,
rules[].parameters.require_last_push_approval,
rules[].parameters.required_approving_review_count,
rules[].parameters.required_review_thread_resolution,
rules[].parameters.required_reviewers[].file_patterns,
rules[].parameters.required_reviewers[].minimum_approvals,
rules[].parameters.required_reviewers[].reviewer,
rules[].parameters.required_reviewers[].reviewer.id,
rules[].parameters.required_reviewers[].reviewer.type,
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
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the ruleset.

</td></tr>
<tr><td>target</td><td>no</td><td>

The target of the ruleset

</td></tr>
<tr><td>enforcement</td><td>yes</td><td>

The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise).

</td></tr>
<tr><td>bypass_actors</td><td>no</td><td>

The actors that can bypass the rules in this ruleset

</td></tr>
<tr><td>bypass_actors[].actor_id</td><td>no</td><td>

The ID of the actor that can bypass a ruleset. Required for `Integration`, `RepositoryRole`, and `Team` actor types. If `actor_type` is `OrganizationAdmin`, this should be `1`. If `actor_type` is `DeployKey`, this should be null. `OrganizationAdmin` is not applicable for personal repositories.

</td></tr>
<tr><td>bypass_actors[].actor_type</td><td>yes</td><td>

The type of actor that can bypass a ruleset.

</td></tr>
<tr><td>bypass_actors[].bypass_mode</td><td>no</td><td>

When the specified actor can bypass the ruleset. `pull_request` means that an actor can only bypass rules on pull requests. `pull_request` is not applicable for the `DeployKey` actor type. Also, `pull_request` is only applicable to branch rulesets. When `bypass_mode` is `exempt`, rules will not be run for that actor and a bypass audit entry will not be created.

</td></tr>
<tr><td>conditions</td><td>no</td><td>

Conditions for an organization ruleset.
The branch and tag rulesets conditions object should contain both `repository_name` and `ref_name` properties, or both `repository_id` and `ref_name` properties, or both `repository_property` and `ref_name` properties.
The push rulesets conditions object does not require the `ref_name` property.
For repository policy rulesets, the conditions object should only contain the `repository_name`, the `repository_id`, or the `repository_property`.

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
<tr><td>rules[].parameters.required_reviewers</td><td>no</td><td>

> [!NOTE]
> `required_reviewers` is in beta and subject to change.

A collection of reviewers and associated file patterns. Each reviewer has a list of file patterns which determine the files that reviewer is required to review.

</td></tr>
<tr><td>rules[].parameters.required_reviewers[].file_patterns</td><td>yes</td><td>

Array of file patterns. Pull requests which change matching files must be approved by the specified team. File patterns use fnmatch syntax.

</td></tr>
<tr><td>rules[].parameters.required_reviewers[].minimum_approvals</td><td>yes</td><td>

Minimum number of approvals required from the specified team. If set to zero, the team will be added to the pull request but approval is optional.

</td></tr>
<tr><td>rules[].parameters.required_reviewers[].reviewer</td><td>yes</td><td>

A required reviewing team

</td></tr>
<tr><td>rules[].parameters.required_reviewers[].reviewer.id</td><td>yes</td><td>

ID of the reviewer which must review changes to matching files.

</td></tr>
<tr><td>rules[].parameters.required_reviewers[].reviewer.type</td><td>yes</td><td>

The type of the reviewer

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

The maximum amount of characters allowed in file paths.

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
<tr><td>rules[].parameters.review_draft_pull_requests</td><td>no</td><td>

Copilot automatically reviews draft pull requests before they are marked as ready for review.

</td></tr>
<tr><td>rules[].parameters.review_on_push</td><td>no</td><td>

Copilot automatically reviews each new push to the pull request.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/rules#create-an-organization-repository-ruleset).
