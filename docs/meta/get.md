---
name: Get GitHub meta information
example: octokit.rest.meta.get()
route: GET /meta
scope: meta
type: API method
---

# Get GitHub meta information

Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."

The values shown in the documentation's response are example values. You must always query the API directly to get the latest values.

**Note:** This endpoint returns both IPv4 and IPv6 addresses. However, not all features support IPv6. You should refer to the specific documentation for each feature to determine if IPv6 is supported.

```js
octokit.rest.meta.get();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/meta#get-github-meta-information).
