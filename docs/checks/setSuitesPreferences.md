# Set preferences for check suites on a repository

Changes the default automatic flow when creating check suites. By default, the CheckSuiteEvent is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

```js
octokit.checks.setSuitesPreferences(owner, repo, auto_trigger_checks[].app_id, auto_trigger_checks[].setting)
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

owner parameter

</td></tr>
<tr><td>repo</td><td>yes</td><td>

repo parameter

</td></tr>
<tr><td>auto_trigger_checks</td><td>no</td><td>

Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://developer.github.com/v3/checks/suites/#auto_trigger_checks-object) description for details.

</td></tr>
<tr><td>auto_trigger_checks[].app_id</td><td>yes</td><td>

The `id` of the GitHub App.

</td></tr>
<tr><td>auto_trigger_checks[].setting</td><td>yes</td><td>

Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](endpoint.documentationUrl).
