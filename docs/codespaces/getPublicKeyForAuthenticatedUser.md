---
name: Get public key for the authenticated user
example: octokit.rest.codespaces.getPublicKeyForAuthenticatedUser()
route: GET /user/codespaces/secrets/public-key
scope: codespaces
type: API method
---

# Get public key for the authenticated user

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.

The authenticated user must have Codespaces access to use this endpoint.

OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```js
octokit.rest.codespaces.getPublicKeyForAuthenticatedUser();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/codespaces/secrets#get-public-key-for-the-authenticated-user).
