---
name: Get interaction restrictions for your public repositories
example: octokit.rest.interactions.getRestrictionsForAuthenticatedUser()
route: GET /user/interaction-limits
scope: interactions
type: API method
---

# Get interaction restrictions for your public repositories

Shows which type of GitHub user can interact with your public repositories and when the restriction expires.

```js
octokit.rest.interactions.getRestrictionsForAuthenticatedUser();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/interactions/user#get-interaction-restrictions-for-your-public-repositories).
