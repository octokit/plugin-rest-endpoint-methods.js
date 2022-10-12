---
name: Get a reference
example: octokit.rest.git.getRef({ owner, repo, ref })
route: GET /repos/{owner}/{repo}/git/ref/{ref}
scope: git
type: API method
---

# Get a reference

Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://docs.github.com/enterprise-cloud@latest//rest/reference/pulls#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-cloud@latest//rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".

```js
octokit.rest.git.getRef({
  owner,
  repo,
  ref,
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

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>ref</td><td>yes</td><td>

ref parameter

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/git#get-a-reference).
