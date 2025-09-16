---
name: Update organization pattern configurations
example: octokit.rest.secretScanning.updateOrgPatternConfigs({ org })
route: PATCH /orgs/{org}/secret-scanning/pattern-configurations
scope: secretScanning
type: API method
---

# Update organization pattern configurations

Updates the secret scanning pattern configurations for an organization.

Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.secretScanning.updateOrgPatternConfigs({
  org,
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
<tr><td>pattern_config_version</td><td>no</td><td>

The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.

</td></tr>
<tr><td>provider_pattern_settings</td><td>no</td><td>

Pattern settings for provider patterns.

</td></tr>
<tr><td>provider_pattern_settings[].token_type</td><td>no</td><td>

The ID of the pattern to configure.

</td></tr>
<tr><td>provider_pattern_settings[].push_protection_setting</td><td>no</td><td>

Push protection setting to set for the pattern.

</td></tr>
<tr><td>custom_pattern_settings</td><td>no</td><td>

Pattern settings for custom patterns.

</td></tr>
<tr><td>custom_pattern_settings[].token_type</td><td>no</td><td>

The ID of the pattern to configure.

</td></tr>
<tr><td>custom_pattern_settings[].custom_pattern_version</td><td>no</td><td>

The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.

</td></tr>
<tr><td>custom_pattern_settings[].push_protection_setting</td><td>no</td><td>

Push protection setting to set for the pattern.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/push-protection#update-organization-pattern-configurations).
