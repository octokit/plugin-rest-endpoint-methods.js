---

name: Get a code quality finding
example: octokit.rest.codeQuality.getFinding({ owner, repo, finding_number })
route: GET /repos/{owner}/{repo}/code-quality/findings/{finding_number}
scope: codeQuality
type: API method
---

# Get a code quality finding

Gets a single code quality finding.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```js
octokit.rest.codeQuality.getFinding({
  owner,
  repo,
  finding_number,
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
<tr><td>finding_number</td><td>yes</td><td>

The number that identifies a finding.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/code-quality/code-quality#get-a-code-quality-finding).
