---
name: Update a code security configuration
example: octokit.rest.codeSecurity.updateConfiguration({ org, configuration_id, secret_scanning_delegated_bypass_options.reviewers[].reviewer_id, secret_scanning_delegated_bypass_options.reviewers[].reviewer_type })
route: PATCH /orgs/{org}/code-security/configurations/{configuration_id}
scope: codeSecurity
type: API method
---

# Update a code security configuration

Updates a code security configuration in an organization.

The authenticated user must be an administrator or security manager for the organization to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.codeSecurity.updateConfiguration({
        org,
configuration_id,
secret_scanning_delegated_bypass_options.reviewers[].reviewer_id,
secret_scanning_delegated_bypass_options.reviewers[].reviewer_type
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
<tr><td>configuration_id</td><td>yes</td><td>

The unique identifier of the code security configuration.

</td></tr>
<tr><td>name</td><td>no</td><td>

The name of the code security configuration. Must be unique within the organization.

</td></tr>
<tr><td>description</td><td>no</td><td>

A description of the code security configuration

</td></tr>
<tr><td>advanced_security</td><td>no</td><td>

The enablement status of GitHub Advanced Security features. `enabled` will enable both Code Security and Secret Protection features.

</td></tr>
<tr><td>dependency_graph</td><td>no</td><td>

The enablement status of Dependency Graph

</td></tr>
<tr><td>dependency_graph_autosubmit_action</td><td>no</td><td>

The enablement status of Automatic dependency submission

</td></tr>
<tr><td>dependency_graph_autosubmit_action_options</td><td>no</td><td>

Feature options for Automatic dependency submission

</td></tr>
<tr><td>dependency_graph_autosubmit_action_options.labeled_runners</td><td>no</td><td>

Whether to use runners labeled with 'dependency-submission' or standard GitHub runners.

</td></tr>
<tr><td>dependabot_alerts</td><td>no</td><td>

The enablement status of Dependabot alerts

</td></tr>
<tr><td>dependabot_security_updates</td><td>no</td><td>

The enablement status of Dependabot security updates

</td></tr>
<tr><td>code_scanning_default_setup</td><td>no</td><td>

The enablement status of code scanning default setup

</td></tr>
<tr><td>code_scanning_default_setup_options</td><td>no</td><td>

Feature options for code scanning default setup

</td></tr>
<tr><td>code_scanning_default_setup_options.runner_type</td><td>no</td><td>

Whether to use labeled runners or standard GitHub runners.

</td></tr>
<tr><td>code_scanning_default_setup_options.runner_label</td><td>no</td><td>

The label of the runner to use for code scanning default setup when runner_type is 'labeled'.

</td></tr>
<tr><td>code_scanning_delegated_alert_dismissal</td><td>no</td><td>

The enablement status of code scanning delegated alert dismissal

</td></tr>
<tr><td>secret_scanning</td><td>no</td><td>

The enablement status of secret scanning

</td></tr>
<tr><td>secret_scanning_push_protection</td><td>no</td><td>

The enablement status of secret scanning push protection

</td></tr>
<tr><td>secret_scanning_delegated_bypass</td><td>no</td><td>

The enablement status of secret scanning delegated bypass

</td></tr>
<tr><td>secret_scanning_delegated_bypass_options</td><td>no</td><td>

Feature options for secret scanning delegated bypass

</td></tr>
<tr><td>secret_scanning_delegated_bypass_options.reviewers</td><td>no</td><td>

The bypass reviewers for secret scanning delegated bypass

</td></tr>
<tr><td>secret_scanning_delegated_bypass_options.reviewers[].reviewer_id</td><td>yes</td><td>

The ID of the team or role selected as a bypass reviewer

</td></tr>
<tr><td>secret_scanning_delegated_bypass_options.reviewers[].reviewer_type</td><td>yes</td><td>

The type of the bypass reviewer

</td></tr>
<tr><td>secret_scanning_validity_checks</td><td>no</td><td>

The enablement status of secret scanning validity checks

</td></tr>
<tr><td>secret_scanning_non_provider_patterns</td><td>no</td><td>

The enablement status of secret scanning non-provider patterns

</td></tr>
<tr><td>secret_scanning_generic_secrets</td><td>no</td><td>

The enablement status of Copilot secret scanning

</td></tr>
<tr><td>secret_scanning_delegated_alert_dismissal</td><td>no</td><td>

The enablement status of secret scanning delegated alert dismissal

</td></tr>
<tr><td>private_vulnerability_reporting</td><td>no</td><td>

The enablement status of private vulnerability reporting

</td></tr>
<tr><td>enforcement</td><td>no</td><td>

The enforcement status for a security configuration

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#update-a-code-security-configuration).
