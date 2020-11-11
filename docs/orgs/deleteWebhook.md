---
name: Delete an organization webhook
example: octokit.orgs.deleteWebhook({ org, hook_id })
route: DELETE /orgs/{org}/hooks/{hook_id}
scope: orgs
type: API method
---

# Delete an organization webhook

```js
octokit.orgs.deleteWebhook({
  org,
  hook_id
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

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook).
