---
name: List users blocked by the authenticated user
example: octokit.users.listBlocked()
route: GET /user/blocks
scope: users
type: API method
---

# List users blocked by the authenticated user

**Deprecated:** This method has been renamed to users.listBlockedByAuthenticated

List the users you've blocked on your personal account.

```js
octokit.users.listBlocked();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/users/blocking/#list-users-blocked-by-the-authenticated-user).
