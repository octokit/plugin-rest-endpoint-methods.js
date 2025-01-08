---
name: Create a code security configuration for an enterprise
example: octokit.rest.codeSecurity.createConfigurationForEnterprise({ enterprise, name, description })
route: POST /enterprises/{enterprise}/code-security/configurations
scope: codeSecurity
type: API method
---

# Create a code security configuration for an enterprise

Creates a code security configuration in an enterprise.

The authenticated user must be an administrator of the enterprise in order to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```js
octokit.rest.codeSecurity.createConfigurationForEnterprise({
  enterprise,
  name,
  description,
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
    <tr><td>enterprise</td><td>yes</td><td>

The slug version of the enterprise name. You can also substitute this value with the enterprise id.

</td></tr>
<tr><td>name</td><td>yes</td><td>

The name of the code security configuration. Must be unique within the enterprise.

</td></tr>
<tr><td>description</td><td>yes</td><td>

A description of the code security configuration

</td></tr>
<tr><td>advanced_security</td><td>no</td><td>

The enablement status of GitHub Advanced Security

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
<tr><td>secret_scanning</td><td>no</td><td>

The enablement status of secret scanning

</td></tr>
<tr><td>secret_scanning_push_protection</td><td>no</td><td>

The enablement status of secret scanning push protection

</td></tr>
<tr><td>secret_scanning_validity_checks</td><td>no</td><td>

The enablement status of secret scanning validity checks

</td></tr>
<tr><td>secret_scanning_non_provider_patterns</td><td>no</td><td>

The enablement status of secret scanning non provider patterns

</td></tr>
<tr><td>private_vulnerability_reporting</td><td>no</td><td>

The enablement status of private vulnerability reporting

</td></tr>
<tr><td>enforcement</td><td>no</td><td>

The enforcement status for a security configuration

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-security/configurations#create-a-code-security-configuration-for-an-enterprise).
