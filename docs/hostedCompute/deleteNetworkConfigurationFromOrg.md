---
name: Delete a hosted compute network configuration from an organization
example: octokit.rest.hostedCompute.deleteNetworkConfigurationFromOrg({ org, network_configuration_id })
route: DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}
scope: hostedCompute
type: API method
---

# Delete a hosted compute network configuration from an organization

Deletes a hosted compute network configuration from an organization.

OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.

```js
octokit.rest.hostedCompute.deleteNetworkConfigurationFromOrg({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/network-configurations#delete-a-hosted-compute-network-configuration-from-an-organization).
