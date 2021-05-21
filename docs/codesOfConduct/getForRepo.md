---
name: Get the code of conduct for a repository
example: octokit.rest.codesOfConduct.getForRepo({ owner, repo })
route: GET /repos/{owner}/{repo}/community/code_of_conduct
scope: codesOfConduct
type: API method
---

# Get the code of conduct for a repository

Returns the contents of the repository's code of conduct file, if one is detected.

A code of conduct is detected if there is a file named `CODE_OF_CONDUCT` in the root directory of the repository. GitHub detects which code of conduct it is using fuzzy matching.

```js
octokit.rest.codesOfConduct.getForRepo({
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

</td></tr>
<tr><td>repo</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository).
