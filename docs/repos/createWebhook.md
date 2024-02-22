---
name: Create a repository webhook
example: octokit.rest.repos.createWebhook({ owner, repo })
route: POST /repos/{owner}/{repo}/hooks
scope: repos
type: API method
---

# Create a repository webhook

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.

```js
octokit.rest.repos.createWebhook({
  owner,
  repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository without the `.git` extension. The name is not case sensitive.

</td></tr>
<tr><td>name</td><td>no</td><td>

Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.

</td></tr>
<tr><td>config</td><td>no</td><td>

Key/value pairs to provide settings for this webhook.

</td></tr>
<tr><td>config.url</td><td>no</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>config.content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>config.secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).

</td></tr>
<tr><td>config.insecure_ssl</td><td>no</td><td>

</td></tr>
<tr><td>events</td><td>no</td><td>

Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.

</td></tr>
<tr><td>active</td><td>no</td><td>

Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/rest/repos/webhooks#create-a-repository-webhook).
