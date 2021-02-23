---
name: Get a webhook configuration for an app
example: octokit.apps.getWebhookConfigForApp()
route: GET /app/hook/config
scope: apps
type: API method
---

# Get a webhook configuration for an app

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."

You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```js
octokit.apps.getWebhookConfigForApp();
```

## Parameters

This endpoint has no parameters

See also: [GitHub Developer Guide documentation](https://docs.github.com/v3/apps#get-a-webhook-configuration-for-an-app).
