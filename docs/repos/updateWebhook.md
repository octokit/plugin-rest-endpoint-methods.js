---
name: Update a repository webhook
example: octokit.rest.repos.updateWebhook({ owner, repo, hook_id, config.url })
route: PATCH /repos/{owner}/{repo}/hooks/{hook_id}
scope: repos
type: API method
---

# Update a repository webhook

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."

```js
octokit.rest.repos.updateWebhook({
        owner,
repo,
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
    <tr><td>owner</td><td>yes</td><td>

The account owner of the repository. The name is not case sensitive.

</td></tr>
<tr><td>repo</td><td>yes</td><td>

The name of the repository. The name is not case sensitive.

</td></tr>
<tr><td>hook_id</td><td>yes</td><td>

The unique identifier of the hook.

</td></tr>
<tr><td>config</td><td>no</td><td>

Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-cloud@latest//rest/reference/repos#create-hook-config-params).

</td></tr>
<tr><td>config.url</td><td>yes</td><td>

The URL to which the payloads will be delivered.

</td></tr>
<tr><td>config.content_type</td><td>no</td><td>

The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.

</td></tr>
<tr><td>config.secret</td><td>no</td><td>

If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/enterprise-cloud@latest//webhooks/event-payloads/#delivery-headers).

</td></tr>
<tr><td>config.insecure_ssl</td><td>no</td><td>

</td></tr>
<tr><td>config.address</td><td>no</td><td>

</td></tr>
<tr><td>config.room</td><td>no</td><td>

</td></tr>
<tr><td>events</td><td>no</td><td>

Determines what [events](https://docs.github.com/enterprise-cloud@latest//webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.

</td></tr>
<tr><td>add_events</td><td>no</td><td>

Determines a list of events to be added to the list of events that the Hook triggers for.

</td></tr>
<tr><td>remove_events</td><td>no</td><td>

Determines a list of events to be removed from the list of events that the Hook triggers for.

</td></tr>
<tr><td>active</td><td>no</td><td>

Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.

</td></tr>
  </tbody>
</table>

See also: [GitHub Developer Guide documentation](https://docs.github.com/enterprise-cloud@latest//rest/webhooks/repos#update-a-repository-webhook).
