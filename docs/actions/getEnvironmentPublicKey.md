---
name: Get an environment public key
example: octokit.rest.actions.getEnvironmentPublicKey({ repository_id, environment_name })
route: GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key
scope: actions
type: API method
---

# Get an environment public key

Get the public key for an environment, which you need to encrypt environment
secrets. You need to encrypt a secret before you can create or update secrets.

Anyone with read access to the repository can use this endpoint.

If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```js
octokit.rest.actions.getEnvironmentPublicKey({
  repository_id,
  environment_name,
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
    <tr><td>repository_id</td><td>yes</td><td>

The unique identifier of the repository.

</td></tr>
<tr><td>environment_name</td><td>yes</td><td>

The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/actions/secrets#get-an-environment-public-key).
