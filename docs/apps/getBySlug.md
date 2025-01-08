---
name: Get an app
example: octokit.rest.apps.getBySlug({ app_slug })
route: GET /apps/{app_slug}
scope: apps
type: API method
---

# Get an app

> [!NOTE]
> The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

```js
octokit.rest.apps.getBySlug({
  app_slug,
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
    <tr><td>app_slug</td><td>yes</td><td>

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/apps/apps#get-an-app).
