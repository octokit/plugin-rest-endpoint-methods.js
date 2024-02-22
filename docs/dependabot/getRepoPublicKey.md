---
name: Get a repository public key
example: octokit.rest.dependabot.getRepoPublicKey({ owner, repo })
route: GET /repos/{owner}/{repo}/dependabot/secrets/public-key
scope: dependabot
type: API method
---

# Get a repository public key

Gets your public key, which you need to encrypt secrets. You need to
encrypt a secret before you can create or update secrets. Anyone with read access
to the repository can use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint if the repository is private.

```js
octokit.rest.dependabot.getRepoPublicKey({
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
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/dependabot/secrets#get-a-repository-public-key).
