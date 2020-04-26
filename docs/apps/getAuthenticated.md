---
name: Get the authenticated GitHub App
example: octokit.apps.getAuthenticated()
route: GET /app
scope: apps
type: API method
---

# Get the authenticated GitHub App

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations](https://developer.github.com/v3/apps/#list-installations)" endpoint.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getAuthenticated();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/apps/#get-the-authenticated-github-app).
