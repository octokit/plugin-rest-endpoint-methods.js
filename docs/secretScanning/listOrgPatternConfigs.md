---
name: List organization pattern configurations
example: octokit.rest.secretScanning.listOrgPatternConfigs({ org })
route: GET /orgs/{org}/secret-scanning/pattern-configurations
scope: secretScanning
type: API method
---

# List organization pattern configurations

Lists the secret scanning pattern configurations for an organization.

Personal access tokens (classic) need the `read:org` scope to use this endpoint.

```js
octokit.rest.secretScanning.listOrgPatternConfigs({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/push-protection#list-organization-pattern-configurations).
