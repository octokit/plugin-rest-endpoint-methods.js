---
name: Get rate limit status for the authenticated user
example: octokit.rest.rateLimit.get()
route: GET /rate_limit
scope: rateLimit
type: API method
---

# Get rate limit status for the authenticated user

**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

```js
octokit.rest.rateLimit.get();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user).
