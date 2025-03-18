---
name: Update a hosted compute network configuration for an organization
example: octokit.rest.hostedCompute.updateNetworkConfigurationForOrg({ org, network_configuration_id })
route: PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}
scope: hostedCompute
type: API method
---

# Update a hosted compute network configuration for an organization

Updates a hosted compute network configuration for an organization.

OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.

```js
octokit.rest.hostedCompute.updateNetworkConfigurationForOrg({
  org,
  network_configuration_id,
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>network_configuration_id</td><td>yes</td><td>

Unique identifier of the hosted compute network configuration.

</td></tr>
<tr><td>name</td><td>no</td><td>

Name of the network configuration. Must be between 1 and 100 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '\_'.

</td></tr>
<tr><td>compute_service</td><td>no</td><td>

The hosted compute service to use for the network configuration.

</td></tr>
<tr><td>network_settings_ids</td><td>no</td><td>

The identifier of the network settings to use for the network configuration. Exactly one network settings must be specified.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/network-configurations#update-a-hosted-compute-network-configuration-for-an-organization).
