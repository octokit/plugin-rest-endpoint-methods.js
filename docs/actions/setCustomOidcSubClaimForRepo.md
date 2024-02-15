---
name: Set the customization template for an OIDC subject claim for a repository
example: octokit.rest.actions.setCustomOidcSubClaimForRepo({ owner, repo, use_default })
route: PUT /repos/{owner}/{repo}/actions/oidc/customization/sub
scope: actions
type: API method
---

# Set the customization template for an OIDC subject claim for a repository

Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.
You must authenticate using an access token with the `repo` scope to use this
endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.

```js
octokit.rest.actions.setCustomOidcSubClaimForRepo({
  owner,
  repo,
  use_default,
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
<tr><td>use_default</td><td>yes</td><td>

Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.

</td></tr>
<tr><td>include_claim_keys</td><td>no</td><td>

Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository).
