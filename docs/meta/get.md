---
name: Get GitHub meta information
example: octokit.rest.meta.get()
route: GET /meta
scope: meta
type: API method
---

# Get GitHub meta information

Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."

**Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.

```js
octokit.rest.meta.get();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/meta#get-github-meta-information).
