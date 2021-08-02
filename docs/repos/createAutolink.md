---
name: Create an autolink reference for a repository
example: octokit.rest.repos.createAutolink({ owner, repo, key_prefix, url_template })
route: POST /repos/{owner}/{repo}/autolinks
scope: repos
type: API method
---

# Create an autolink reference for a repository

Users with admin access to the repository can create an autolink.

```js
octokit.rest.repos.createAutolink({
  owner,
  repo,
  key_prefix,
  url_template,
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
<tr><td>key_prefix</td><td>yes</td><td>

The prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

</td></tr>
<tr><td>url_template</td><td>yes</td><td>

The URL must contain <num> for the reference number.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/repos#create-an-autolink).
