---
name: List organization webhooks
example: octokit.rest.orgs.listWebhooks({ org })
route: GET /orgs/{org}/hooks
scope: orgs
type: API method
---

# List organization webhooks

```js
octokit.rest.orgs.listWebhooks({
  org,
});
```

## Parameters

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>required</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>org</td><td>yes</td><td>

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>per_page</td><td>no</td><td>

The number of results per page (max 100).

</td></tr>
<tr><td>page</td><td>no</td><td>

Page number of the results to fetch.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/orgs/webhooks#list-organization-webhooks).
