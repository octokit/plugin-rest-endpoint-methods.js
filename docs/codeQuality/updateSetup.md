---

name: Update a code quality setup configuration
example: octokit.rest.codeQuality.updateSetup({ owner, repo })
route: PATCH /repos/{owner}/{repo}/code-quality/setup
scope: codeQuality
type: API method
---

# Update a code quality setup configuration

Updates a code quality setup configuration.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeQuality.updateSetup({
  owner,
  repo,
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
<tr><td>state</td><td>no</td><td>

The desired state of code quality setup.

</td></tr>
<tr><td>runner_type</td><td>no</td><td>

Runner type to be used.

</td></tr>
<tr><td>runner_label</td><td>no</td><td>

Runner label to be used if the runner type is labeled.

</td></tr>
<tr><td>languages</td><td>no</td><td>

Languages to be analyzed.

</td></tr>
<tr><td>ai_findings_option</td><td>no</td><td>

Whether AI findings run for Code Quality on this repository.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-quality/code-quality#update-a-code-quality-setup-configuration).
