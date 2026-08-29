---

name: Bulk delete repository custom patterns
example: octokit.rest.secretScanning.bulkDeleteRepoCustomPatterns({ owner, repo, patterns, patterns[].pattern_id })
route: DELETE /repos/{owner}/{repo}/secret-scanning/custom-patterns
scope: secretScanning
type: API method
---

# Bulk delete repository custom patterns

Bulk deletes secret scanning custom patterns for a repository.

OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```js
octokit.rest.secretScanning.bulkDeleteRepoCustomPatterns({
        owner,
repo,
patterns,
patterns[].pattern_id
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

The list of custom patterns to delete.

</td></tr>
<tr><td>patterns[].pattern_id</td><td>yes</td><td>

The ID of the custom pattern to delete.

</td></tr>
<tr><td>patterns[].custom_pattern_version</td><td>no</td><td>

The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.

</td></tr>
<tr><td>post_delete_action</td><td>no</td><td>

What to do with alerts associated with the deleted patterns.
`delete_alerts` permanently removes the alerts.
`resolve_alerts` resolves the alerts as "pattern deleted".
Defaults to `delete_alerts` when not specified.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/secret-scanning/custom-patterns#bulk-delete-repository-custom-patterns).
