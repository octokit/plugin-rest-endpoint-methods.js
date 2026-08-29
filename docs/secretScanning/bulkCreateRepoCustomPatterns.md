---

name: Bulk create repository custom patterns
example: octokit.rest.secretScanning.bulkCreateRepoCustomPatterns({ owner, repo, patterns, patterns[].name, patterns[].pattern })
route: POST /repos/{owner}/{repo}/secret-scanning/custom-patterns
scope: secretScanning
type: API method
---

# Bulk create repository custom patterns

Bulk creates secret scanning custom patterns for a repository.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```js
octokit.rest.secretScanning.bulkCreateRepoCustomPatterns({
        owner,
repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/custom-patterns#bulk-create-repository-custom-patterns).
