---
name: Update an organization webhook
example: octokit.orgs.updateHook({ org, hook_id, config.url })
route: PATCH /orgs/{org}/hooks/{hook_id}
scope: orgs
type: API method
---

# Update an organization webhook

**Deprecated:** This method has been renamed to orgs.updateWebhook

```js
octokit.orgs.updateHook({
        org,
hook_id,
config.url
      })
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
<tr><td>config</td><td>no</td><td>

Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/orgs/hooks/#update-hook-config-params).

</td></tr>
<tr><td>config.url</td><td>yes</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>config.content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>config.secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.

</td></tr>
<tr><td>config.insecure_ssl</td><td>no</td><td>

Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**

</td></tr>
<tr><td>events</td><td>no</td><td>

Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for.

</td></tr>
<tr><td>active</td><td>no</td><td>

Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/hooks/#update-an-organization-webhook).
