---
name: Update repository preferences for check suites
example: octokit.rest.checks.setSuitesPreferences({ owner, repo, auto_trigger_checks[].app_id, auto_trigger_checks[].setting })
route: PATCH /repos/{owner}/{repo}/check-suites/preferences
scope: checks
type: API method
---

# Update repository preferences for check suites

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

```js
octokit.rest.checks.setSuitesPreferences({
        owner,
repo,
auto_trigger_checks[].app_id,
auto_trigger_checks[].setting
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
<tr><td>auto_trigger_checks</td><td>no</td><td>

Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default.

</td></tr>
<tr><td>auto_trigger_checks[].app_id</td><td>yes</td><td>

The `id` of the GitHub App.

</td></tr>
<tr><td>auto_trigger_checks[].setting</td><td>yes</td><td>

Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites).
