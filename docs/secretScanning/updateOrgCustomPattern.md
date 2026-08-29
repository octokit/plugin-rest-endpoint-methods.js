---

name: Update an organization custom pattern
example: octokit.rest.secretScanning.updateOrgCustomPattern({ org, pattern_id, custom_pattern_version })
route: PATCH /orgs/{org}/secret-scanning/custom-patterns/{pattern_id}
scope: secretScanning
type: API method
---

# Update an organization custom pattern

Updates a secret scanning custom pattern for an organization.

Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.secretScanning.updateOrgCustomPattern({
  org,
  pattern_id,
  custom_pattern_version,
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
<tr><td>pattern_id</td><td>yes</td><td>

The ID of the custom pattern.

</td></tr>
<tr><td>pattern</td><td>no</td><td>

The updated regular expression of the custom pattern.

</td></tr>
<tr><td>start_delimiter</td><td>no</td><td>

The updated start delimiter regex for the custom pattern.

</td></tr>
<tr><td>end_delimiter</td><td>no</td><td>

The updated end delimiter regex for the custom pattern.

</td></tr>
<tr><td>must_match</td><td>no</td><td>

Updated list of regexes that the secret must match.

</td></tr>
<tr><td>must_not_match</td><td>no</td><td>

Updated list of regexes that the secret must not match.

</td></tr>
<tr><td>custom_pattern_version</td><td>yes</td><td>

The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/custom-patterns#update-an-organization-custom-pattern).
