---
name: Get a hosted compute network configuration for an organization
example: octokit.rest.hostedCompute.getNetworkConfigurationForOrg({ org, network_configuration_id })
route: GET /orgs/{org}/settings/network-configurations/{network_configuration_id}
scope: hostedCompute
type: API method
---

# Get a hosted compute network configuration for an organization

Gets a hosted compute network configuration configured in an organization.

OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.

```js
octokit.rest.hostedCompute.getNetworkConfigurationForOrg({
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/network-configurations#get-a-hosted-compute-network-configuration-for-an-organization).
