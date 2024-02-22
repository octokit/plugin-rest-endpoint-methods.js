---
name: Get the authenticated user
example: octokit.rest.users.getAuthenticated()
route: GET /user
scope: users
type: API method
---

# Get the authenticated user

OAuth app tokens and personal access tokens (classic) need the `user` scope in order for the response to include private profile information.

```js
octokit.rest.users.getAuthenticated();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/users/users#get-the-authenticated-user).
