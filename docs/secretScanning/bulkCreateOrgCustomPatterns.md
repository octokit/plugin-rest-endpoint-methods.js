---

name: Bulk create organization custom patterns
example: octokit.rest.secretScanning.bulkCreateOrgCustomPatterns({ org, patterns, patterns[].name, patterns[].pattern })
route: POST /orgs/{org}/secret-scanning/custom-patterns
scope: secretScanning
type: API method
---

# Bulk create organization custom patterns

Bulk creates secret scanning custom patterns for an organization.

Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```js
octokit.rest.secretScanning.bulkCreateOrgCustomPatterns({
        org,
patterns,
patterns[].name,
patterns[].pattern
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
<tr><td>patterns</td><td>yes</td><td>

The list of custom patterns to create.

</td></tr>
<tr><td>patterns[].name</td><td>yes</td><td>

The name of the custom pattern.

</td></tr>
<tr><td>patterns[].pattern</td><td>yes</td><td>

The regular expression of the custom pattern.

</td></tr>
<tr><td>patterns[].start_delimiter</td><td>no</td><td>

The start delimiter regex for the custom pattern.
Defaults to `\A|[^0-9A-Za-z]` when not specified.

</td></tr>
<tr><td>patterns[].end_delimiter</td><td>no</td><td>

The end delimiter regex for the custom pattern.
Defaults to `\z|[^0-9A-Za-z]` when not specified.

</td></tr>
<tr><td>patterns[].must_match</td><td>no</td><td>

List of regexes that the secret must match.

</td></tr>
<tr><td>patterns[].must_not_match</td><td>no</td><td>

List of regexes that the secret must not match.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/custom-patterns#bulk-create-organization-custom-patterns).
