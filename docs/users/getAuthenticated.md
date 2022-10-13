---
name: Get the authenticated user
example: octokit.rest.users.getAuthenticated()
route: GET /user
scope: users
type: API method
---

# Get the authenticated user

If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.

```js
octokit.rest.users.getAuthenticated();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/users#get-the-authenticated-user).
