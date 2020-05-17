---
name: Create a hook
example: octokit.orgs.createHook({ org, name, config, config.url })
route: POST /orgs/{org}/hooks
scope: orgs
type: API method
---

# Create a hook

Here's how you can create a hook that posts payloads in JSON format:

```js
octokit.orgs.createHook({
        org,
name,
config,
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
<tr><td>name</td><td>yes</td><td>

Must be passed as "web".

</td></tr>
<tr><td>config</td><td>yes</td><td>

Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/orgs/hooks/#create-hook-config-params).

</td></tr>
<tr><td>config.url</td><td>yes</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>config.content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>config.secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/#delivery-headers) header.

</td></tr>
<tr><td>config.insecure_ssl</td><td>no</td><td>

Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**

</td></tr>
<tr><td>events</td><td>no</td><td>

Determines what [events](https://developer.github.com/v3/activity/events/types/) the hook is triggered for.

</td></tr>
<tr><td>active</td><td>no</td><td>

Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://developer.github.com/v3/orgs/hooks/#create-a-hook).
