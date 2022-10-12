---
name: Get public key for the authenticated user
example: octokit.rest.codespaces.getPublicKeyForAuthenticatedUser()
route: GET /user/codespaces/secrets/public-key
scope: codespaces
type: API method
---

# Get public key for the authenticated user

Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.

You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.

GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.

```js
octokit.rest.codespaces.getPublicKeyForAuthenticatedUser();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/codespaces#get-public-key-for-the-authenticated-user).
