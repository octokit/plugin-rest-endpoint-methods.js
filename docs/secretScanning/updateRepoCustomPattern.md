---

name: Update a repository custom pattern
example: octokit.rest.secretScanning.updateRepoCustomPattern({ owner, repo, pattern_id, custom_pattern_version })
route: PATCH /repos/{owner}/{repo}/secret-scanning/custom-patterns/{pattern_id}
scope: secretScanning
type: API method
---

# Update a repository custom pattern

Updates a secret scanning custom pattern for a repository.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```js
octokit.rest.secretScanning.updateRepoCustomPattern({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/custom-patterns#update-a-repository-custom-pattern).
