---
name: Get an organization webhook
example: octokit.orgs.getHook({ org, hook_id })
route: GET /orgs/{org}/hooks/{hook_id}
scope: orgs
type: API method
---

# Get an organization webhook

**Deprecated:** This method has been renamed to orgs.getWebhook

```js
octokit.orgs.getHook({
  org,
  hook_id,
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

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/hooks/#get-an-organization-webhook).
