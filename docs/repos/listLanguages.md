---
name: List languages
example: octokit.repos.listLanguages({ owner, repo })
route: GET /repos/{owner}/{repo}/languages
scope: repos
type: API method
---

# List languages

Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.

```js
octokit.repos.listLanguages({
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

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/repos/#list-languages).
