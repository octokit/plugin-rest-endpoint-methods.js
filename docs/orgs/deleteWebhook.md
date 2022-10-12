---
name: Delete an organization webhook
example: octokit.rest.orgs.deleteWebhook({ org, hook_id })
route: DELETE /orgs/{org}/hooks/{hook_id}
scope: orgs
type: API method
---

# Delete an organization webhook

```js
octokit.rest.orgs.deleteWebhook({
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

The organization name. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-an-organization-webhook).
