---
name: Update a reference
example: octokit.rest.git.updateRef({ owner, repo, ref, sha })
route: PATCH /repos/{owner}/{repo}/git/refs/{ref}
scope: git
type: API method
---

# Update a reference

```js
octokit.rest.git.updateRef({
  owner,
  repo,
  ref,
  sha,
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

The name of the fully qualified reference to update. For example, `refs/heads/master`. If the value doesn't start with `refs` and have at least two slashes, it will be rejected.

</td></tr>
<tr><td>sha</td><td>yes</td><td>

The SHA1 value to set this reference to

</td></tr>
<tr><td>force</td><td>no</td><td>

Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/git#update-a-reference).
